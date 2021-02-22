<?php

namespace App\Entity;

use App\Repository\UserRepository;
use App\Traits\HasTimestamps;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\PersistentCollection;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
	use HasTimestamps;

	public const ROLES = ['user' => 'ROLE_USER', 'admin' => 'ROLE_ADMIN'];

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="string")
     */
    private ?string $username = null;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private ?string $email = null;

    /**
     * @ORM\Column(type="json")
     */
    private array $roles = [];

    /**
     * @ORM\Column(type="string")
     */
    private ?string $password = null;

    /**
     * @ORM\OneToMany(targetEntity=Link::class, mappedBy="user")
     */
    private ?Collection $links = null;

    /**
     * @ORM\ManyToMany(targetEntity=Link::class, inversedBy="users")
     * @ORM\JoinTable(name="links_views")
     */
    private ?Collection $views = null;

    public function __construct()
    {
        $this->links = new ArrayCollection();
        $this->views = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = self::ROLES['user'];

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

	public function setUsername(?string $username): self
	{
	   $this->username = $username;

	   return $this;
	}

	public function getAvatar(): string
	{
		$default = "https://www.somewhere.com/homestar.jpg";
		$size    = 40;

		return "https://www.gravatar.com/avatar/" . md5( strtolower( trim( $this->email ) ) ) . "?s=" . $size;
	}

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return Collection|Link[]
     */
    public function getLinks(): Collection
    {
        return $this->links;
    }

    public function addLink(Link $link): self
    {
        if (!$this->links->contains($link)) {
            $this->links[] = $link;
            $link->setUser($this);
        }

        return $this;
    }

    public function removeLink(Link $link): self
    {
        if ($this->links->contains($link)) {
            $this->links->removeElement($link);
            // set the owning side to null (unless already changed)
            if ($link->getUser() === $this) {
                $link->setUser(null);
            }
        }

        return $this;
    }

	/**
	 * Si retourne vrai, l'utilisateur a déjà consulté le lien passé en paramètre.
	 *
	 * @param Link $link
	 * @return bool
	 */
	public function hasAlreadyView(Link $link): bool
	{
		return $this->views->contains($link) === true;
    }

	/**
	 * @param int $id
	 * @return User
	 */
	public function setId(int $id): User
	{
		$this->id = $id;

		return $this;
	}

    /**
     * @return Collection|Link[]
     */
    public function getViews(): Collection
    {
        return $this->views;
    }

    public function addView(Link $view): self
    {
        if (!$this->views->contains($view)) {
            $this->views[] = $view;
        }

        return $this;
    }

    public function removeView(Link $view): self
    {
        $this->views->removeElement($view);

        return $this;
    }
}
