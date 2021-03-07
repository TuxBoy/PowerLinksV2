<?php

namespace App\Entity;

use App\Repository\LinkRepository;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=LinkRepository::class)
 * @UniqueEntity("url")
 */
class Link
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private ?string $url = null;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $name = null;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $description = null;

    /**
     * @ORM\Column(type="boolean", options={"default": 0})
     */
    private bool $seen;

    /**
     * @ORM\Column(type="datetime")
     */
    private ?DateTimeInterface $created_at = null;

    /**
     * @ORM\Column(type="datetime")
     */
    private ?DateTimeInterface $updated_at = null;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="links")
     */
    private ?User $user = null;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $image = null;

    /**
     * @ORM\ManyToMany(targetEntity=Tag::class, inversedBy="links", cascade={"persist"})
     */
    private Collection $tags;

    /**
     * @ORM\Column(type="boolean", options={"default": 0})
     */
    private bool $private = false;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="views")
     */
    private ?Collection $viewsUsers = null;

    public function __construct()
    {
        $this->tags = new ArrayCollection();
        $this->viewsUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getSeen(): ?bool
    {
        return $this->seen;
    }

    public function setSeen(bool $seen): self
    {
        $this->seen = $seen;

        return $this;
    }

    public function getCreatedAt(): ?DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        if ($this->tags->contains($tag)) {
            $this->tags->removeElement($tag);
        }

        return $this;
    }

	public function canRemove(?User $currentUser): bool
	{
		if ($currentUser === null) {
		    return false;
		}

		return ($this->getUser()->getId() === $currentUser->getId())
		    || in_array(User::ROLES['admin'], $currentUser->getRoles());
	}

	public function isPrivate(?User $user): bool
	{
		if ($user === null && $this->private === true) {
		    return true;
		}

		return $this->private === true && $this->getUser()->getId() !== $user->getId();
	}

	public function isNew(): bool
	{
		return $this->created_at >= new \DateTime('-2days');
	}

    public function getPrivate(): bool
    {
        return $this->private;
    }

    public function setPrivate(bool $private): self
    {
        $this->private = $private;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getViewsUsers(): Collection
    {
        return $this->viewsUsers;
    }

    public function addUser(User $user): self
    {
        if (!$this->viewsUsers->contains($user)) {
            $this->viewsUsers[] = $user;
            $user->addView($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->viewsUsers->removeElement($user)) {
            $user->removeView($this);
        }

        return $this;
    }

	/**
	 * @param int|null $id
	 * @return Link
	 */
	public function setId(?int $id): Link
	{
		$this->id = $id;
		return $this;
	}
}
