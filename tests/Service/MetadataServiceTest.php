<?php
declare(strict_types=1);

namespace App\Tests\Service;

use Infrastructure\Symfony\Service\Metadata\MetadataService;
use PHPUnit\Framework\TestCase;

final class MetadataServiceTest extends TestCase
{

	public function testGetMetaTitle(): void
	{
		$html = <<<HTML
			<!doctype html>
				<html lang="en">
				<head>
				    <meta charset="UTF-8">
				    <meta name="viewport"
				          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				    <meta http-equiv="X-UA-Compatible" content="ie=edge">
				    <meta name="description" content="description de test">
				   <title>Mon super site</title>
				</head>
				<body>
				
				</body>
				</html>
		HTML;
		$metadata = new MetadataService($html);

		$this->assertEquals('Mon super site', $metadata->getTitle());
		$this->assertEquals('description de test', $metadata->getDescription());
	}

	public function testIfNotTitleMetaTag(): void
	{
		$html = <<<HTML
			<!doctype html>
				<html lang="en">
				<head>
				    <meta charset="UTF-8">
				    <meta name="viewport"
				          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				    <meta http-equiv="X-UA-Compatible" content="ie=edge">
				   <title></title>
				</head>
				<body>
				
				</body>
				</html>
		HTML;
		$metadata = new MetadataService($html);

		$this->assertEmpty($metadata->getTitle());
		$this->assertNull($metadata->getDescription());
	}

	public function testGetMetaKeywords(): void
	{
		$html = <<<HTML
			<!doctype html>
				<html lang="en">
				<head>
				    <meta charset="UTF-8">
				    <meta name="viewport"
				          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				    <meta http-equiv="X-UA-Compatible" content="ie=edge">
				    <meta name="keywords" content="php, symfony" />
				   <title></title>
				</head>
				<body>
				
				</body>
				</html>
		HTML;
		$metadata = new MetadataService($html);
		$this->assertEquals(['php', 'symfony'], $metadata->getKeywords());
	}

	public function testGetMetaImage(): void
	{
		$html = <<<HTML
			<!doctype html>
				<html lang="en">
				<head>
				    <meta charset="UTF-8">
				    <meta name="keywords" content="php, symfony" />
				    <meta property="og:image" content="https://linktoImage.jpg" />
				   <title>Mon super site</title>
				</head>
				<body>
				
				</body>
				</html>
		HTML;
		$metadata = new MetadataService($html);
		$this->assertEquals('https://linktoImage.jpg', $metadata->getImage());
	}

	public function testGetMetaImageByTwitterName(): void
	{
		$html = <<<HTML
			<!doctype html>
				<html lang="en">
				<head>
				    <meta charset="UTF-8">
				    <meta name="keywords" content="php, symfony" />
				    <meta property="twitter:image" content="https://twitterlinktoImage.jpg" />
				    <meta property="og:image" content="https://linktoImage.jpg" />
				   <title>Mon super site</title>
				</head>
				<body>
				</body>
				</html>
		HTML;
		$metadata = new MetadataService($html);
		$this->assertEquals('https://twitterlinktoImage.jpg', $metadata->getImage());
	}

	public function testIfNotMetaKeywords(): void
	{
		$html = <<<HTML
			<!doctype html>
				<html lang="en">
				<head>
				    <meta charset="UTF-8">
				    <meta name="viewport"
				          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				    <meta http-equiv="X-UA-Compatible" content="ie=edge">
				   <title></title>
				</head>
				<body>
				
				</body>
				</html>
		HTML;
		$metadata = new MetadataService($html);
		$this->assertEmpty($metadata->getKeywords());
	}

}
