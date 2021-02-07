<?php
declare(strict_types=1);

namespace App\Traits;

use Doctrine\ORM\Mapping as ORM;

trait HasTimestamps
{

	/**
	 * @ORM\Column(type="datetime")
	 */
	private \DateTimeInterface $createdAt;

	/**
	 * @ORM\Column(type="datetime", nullable=true)
	 */
	private ?\DateTimeInterface $updatedAt = null;

	public function getCreatedAt(): ?\DateTimeInterface
	{
		return $this->createdAt;
	}

	public function setCreatedAt(\DateTimeInterface $createdAt): self
	{
		$this->createdAt = $createdAt;

		return $this;
	}

	public function getUpdatedAt(): ?\DateTimeInterface
	{
		return $this->updatedAt;
	}

	public function setUpdatedAt(\DateTimeInterface $updatedAt): self
	{
		$this->updatedAt = $updatedAt;

		return $this;
	}

}
