<?php

declare(strict_types=1);

namespace App\Service;

use Symfony\Component\DomCrawler\Crawler;

class MetadataService
{

	private Crawler $crawler;

	public function __construct(string $html)
	{
		$this->crawler = new Crawler($html);
	}

	public function getTitle(): ?string
	{
		$titleElement  = $this->crawler->filter('title');
		return $titleElement->count() > 0 ? $titleElement->first()->text() : null;
	}

	public function getDescription(): ?string
	{
		return $this->getMetaBy('description');
	}

	public function getKeywords(): array
	{
		$keywords = $this->getMetaBy('keywords');
		if ($keywords !== null) {
			return explode(', ', trim($keywords, ','));
		}

		return [];
	}

	public function getImage(): ?string
	{
		$twitterImage = $this->getMetaBy('twitter:image', 'property');
		if ($twitterImage !== null) {
			return $twitterImage;
		}
		return $this->getMetaBy('og:image', 'property');
	}

	private function getMetaBy(string $name, string $propertyName = 'name'): ?string
	{
		$element = $this->crawler->filter('meta['. $propertyName .'="'. $name .'"]');
		return $element->count() > 0 ? $element->first()->attr('content') : null;
	}

}
