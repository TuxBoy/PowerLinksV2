-- mysqldump-php https://github.com/ifsnop/mysqldump-php
--
-- Host: r6ze0q02l4me77k3.chr7pe7iynqr.eu-west-1.rds.amazonaws.com	Database: kw4wi6lci72t69mt
-- ------------------------------------------------------
-- Server version 	8.0.15
-- Date: Fri, 04 Jun 2021 10:06:32 +0000

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `favorites_link`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE IF NOT EXISTS  `favorites_link` (
  `user_id` int(11) NOT NULL,
  `link_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`link_id`),
  KEY `IDX_AD6F0783A76ED395` (`user_id`),
  KEY `IDX_AD6F0783ADA40271` (`link_id`),
  CONSTRAINT `FK_AD6F0783A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_AD6F0783ADA40271` FOREIGN KEY (`link_id`) REFERENCES `link` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites_link`
--

LOCK TABLES `favorites_link` WRITE;
/*!40000 ALTER TABLE `favorites_link` DISABLE KEYS */;
SET autocommit=0;
INSERT INTO `favorites_link` VALUES (1,34);
/*!40000 ALTER TABLE `favorites_link` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;

-- Dumped table `favorites_link` with 1 row(s)
--

--
-- Table structure for table `link`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE IF NOT EXISTS  `link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `private` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_36AC99F1F47645AE` (`url`),
  KEY `IDX_36AC99F1A76ED395` (`user_id`),
  CONSTRAINT `FK_36AC99F1A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `link`
--

LOCK TABLES `link` WRITE;
/*!40000 ALTER TABLE `link` DISABLE KEYS */;
SET autocommit=0;
INSERT INTO `link` VALUES (1,'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3156','Faille de sécurité sur sudo, mettre à jour le package','Faille de sécurité sur sudo, mettre à jour le package',1,'2021-02-04 20:39:11','2021-02-04 20:42:43',1,NULL,0),(3,'https://stitcher.io/blog/new-in-php-8','What\'s new in PHP 8 - stitcher.io','PHP 8 is available now!',0,'2021-02-04 21:51:31','2021-02-04 21:51:31',1,'https://stitcher.io/img/meta/new-in-php-8.png',0),(4,'https://training.github.com/downloads/fr/github-git-cheat-sheet.pdf','Aide mémoire Github Git','Aide mémoire Github Git',0,'2021-02-08 09:35:50','2021-02-08 09:35:50',1,NULL,0),(5,'https://github.com/frandiox/vitedge','GitHub - frandiox/vitedge: Edge-side rendering and fullstack Vite framework','Edge-side rendering and fullstack Vite framework. Contribute to frandiox/vitedge development by creating an account on GitHub.',0,'2021-02-08 09:39:32','2021-02-08 09:39:32',1,'https://repository-images.githubusercontent.com/309307577/82c23400-2ad8-11eb-9b18-be54f28e6bf9',0),(6,'https://github.com/vuejs/vuex/releases/tag/v4.0.0','Release v4.0.0 · vuejs/vuex · GitHub','?️ Centralized State Management for Vue.js. Contribute to vuejs/vuex development by creating an account on GitHub.',0,'2021-02-08 10:39:41','2021-02-08 10:39:41',1,'https://avatars.githubusercontent.com/u/6128107?s=400&v=4',0),(7,'https://github.com/n0shake/Public-APIs','GitHub - n0shake/Public-APIs: ? A public list of APIs from round the web.','? A public list of APIs from round the web. Contribute to n0shake/Public-APIs development by creating an account on GitHub.',0,'2021-02-08 10:46:58','2021-02-08 10:46:58',1,'https://avatars.githubusercontent.com/u/8280282?s=400&v=4',0),(8,'https://www.jesuisundev.com/architecture-logicielle/','Architecture logicielle : l\'indispensable à savoir - Je suis un dev','Le concept d\'architecture logicielle est aussi indispensable qu\'ignoré par les développeurs. Ceux qui s\'y intéressent ont un énorme avantage.',0,'2021-02-10 09:08:15','2021-02-10 09:08:15',1,'https://www.jesuisundev.com/wp-content/uploads/2021/02/Y5ZDEJf-1.jpg',0),(9,'https://symfony.com/blog/announcing-symfony-panther-1-0','Announcing Symfony Panther 1.0 (Symfony Blog)','Two years after the first release of the library, we\'re thrilled to announce the immediate availability of Panther version 1.0!',0,'2021-02-11 08:32:37','2021-02-11 08:32:37',1,'https://symfony.com/images/opengraph/symfony.png',0),(10,'http://oumarkonate.com/hexagonal-architecture-an-example-of-implementation/','Hexagonal architecture: an example of implementation - Oumar KONATE - Software Craftsman','Hexagonal architecture: an example of implementation - Oumar KONATE - Software Craftsman',0,'2021-02-11 17:21:13','2021-02-11 17:22:25',1,NULL,0),(11,'https://github.com/oumarkonate/hexagonal-architecture','Un exemple d\'architecture hexagonal sur Github','An example of hexagonal architecture with a modern MVC PHP project without framework.  - oumarkonate/hexagonal-architecture',0,'2021-02-11 17:22:11','2021-02-14 13:57:09',1,'https://avatars.githubusercontent.com/u/10095196?s=400&v=4',0),(12,'https://www.jesuisundev.com/20-outils-webs/','20 outils webs indispensables pour développeurs - Je suis un dev','Avoir les bons outils te fait gagner un temps fou. Je te dévoile mon dossier favoris, j\'ai mis plusieurs années à construire cette liste !',0,'2021-02-15 10:50:58','2021-02-15 10:50:58',1,'https://www.jesuisundev.com/wp-content/uploads/2021/01/fa2e080efc91d4e519e632d97e8b30be_L.jpg',0),(13,'https://levelup.gitconnected.com/microservices-with-php-and-lumen-d9af0b915a71','Microservices with PHP and Lumen. Breaking with PHP’s past without… | by Randal Kamradt Sr | Level Up Coding','PHP was developed in 1994 by Rasmus Lerdorf as a simple way to intermix code executed on the server and standard HTML. It was translated to pure HTML on the server and sent as a response to an HTTP…',0,'2021-02-16 09:28:55','2021-02-16 09:28:55',1,'https://miro.medium.com/max/1200/1*CXctFJDoH3I3i-v7J9OEdQ.jpeg',1),(14,'https://stitcher.io/blog/php-enums','PHP Enums - stitcher.io','Enums in PHP 8.1',0,'2021-02-17 08:43:00','2021-02-17 08:43:00',1,'https://stitcher.io/img/meta/php-enums.png',0),(15,'https://ishadeed.com/article/understanding-z-index/','Comprendre le comportement du z-index','Comprendre le comportement du z-index',0,'2021-02-17 09:35:24','2021-02-17 09:35:24',1,NULL,0),(16,'https://devhints.io/','Devhints — TL;DR for developer documentation','A ridiculous collection of web development cheatsheets · One-page guide to',0,'2021-02-18 14:02:05','2021-02-18 14:02:05',1,'https://assets.devhints.io/previews/index.jpg?t=20210213010649',1),(17,'https://techvblogs.com/blog/laravel-livewire-crud-tutorial','Laravel Livewire Crud Tutorial - TechvBlogs','From this Laravel Livewire CRUD example, you can learn How to do CRUD operation in Laravel 8 framework by using the Livewire package.',0,'2021-02-19 14:53:27','2021-02-19 14:53:42',1,'https://res.cloudinary.com/techvblogs/image/upload/v1612104761/banner/vknfkqwb4rjh5gcfcpwi.png',1),(18,'https://spatie.be/videos/front-line-php/union-types','Union types | Spatie','Union types allow to combine several types. This video shows all the benefits they offer, especially in a dynamically typed langague such as PHP.## Links- [Front Line PHP](https://front-line-php.com/): the book that explains all PHP 8 features and modern ',0,'2021-02-19 16:25:15','2021-02-19 16:25:15',1,'https://spatie.be/images/og-image.jpg',1),(19,'https://www.twilio.com/blog/unit-test-laravel-api-pest-framework','How to Unit Test a Laravel API with the Pest Framework - Twilio','Pest is a new testing framework for PHP, aiming to provide a better experience for writing tests by providing expressive interfaces. In this tutorial, you\'ll learn how to build a small, Laravel, to-do application and test it using the Pest framework.',0,'2021-02-22 09:40:56','2021-02-22 09:40:56',1,'https://twilio-cms-prod.s3.amazonaws.com/original_images/Kopie_von_Generic_Blog_Header_3.png',0),(20,'https://www.jesuisundev.com/javascript-ce-que-javais-pas-compris/','Javascript : ce que j\'avais pas compris - Je suis un dev','Javascript est un l\'un des langages les plus accessibles. Mais entre ceux qui l\'utilisent et ceux qui le maîtrisent, il y a une nette différence.',0,'2021-03-01 12:55:32','2021-03-01 12:55:32',1,'https://www.jesuisundev.com/wp-content/uploads/2021/02/cAMPikT.png',0),(21,'https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/','Announcing TypeScript 4.2 | TypeScript','Announcing TypeScript 4.2 | TypeScript',0,'2021-03-02 08:00:01','2021-03-02 08:00:01',1,'https://devblogs.microsoft.com/typescript/wp-content/uploads/sites/11/2018/08/typescriptfeature.png',0),(22,'https://github.com/Nikoms/clean-architecture-example','GitHub - Nikoms/clean-architecture-example','Contribute to Nikoms/clean-architecture-example development by creating an account on GitHub.',0,'2021-03-02 08:09:08','2021-03-02 08:09:08',1,'https://avatars.githubusercontent.com/u/375867?s=400&v=4',1),(23,'https://www.nextinpact.com/lebrief/46283/microsoft-publie-version-1-7-windows-terminal-preview','Microsoft publie la version 1.7 de Windows Terminal Preview','Elle permet de lancer une nouvelle instance de l\'application dans une déjà existante via ses paramètres, mais supporte également les JSON fragment extensions. Des panneaux peuvent désormais être définis comme accessibles en lectur...',0,'2021-03-02 09:58:24','2021-03-02 09:58:24',1,'https://cdnx.nextinpact.com/data-next/images/bd/wide-linked-media/3167.jpg',0),(24,'https://dev.to/yyx990803/announcing-vite-2-0-2f0a','Announcing Vite 2.0 - DEV Community','Today I\'m excited to announce the official release of Vite 2.0!  Vite (French word for \"fast\", pron... Tagged with javascript, webdev, vite.',0,'2021-03-03 08:29:09','2021-03-03 08:29:26',1,'https://dev.to/social_previews/article/606267.png',0),(25,'https://it-constellation.medium.com/graphql-change-for-the-best-651c606abc67','GraphQL: change for the best. Today I’d like to share with you… | by Anastasia Lysenko | Jan, 2021 | Medium','Today I’d like to share with you real-life code and schema example how one can successfully integrate GraphQL into PHP and how to optimize the result. At the moment it’s hardly unlikely to meet…',0,'2021-03-03 10:05:03','2021-03-03 10:05:03',1,'https://miro.medium.com/max/850/1*nAgb7peJ8DNOGLA8yi8FXg.png',0),(26,'https://medium.com/quick-code/10-reasons-why-every-developer-should-switch-to-linux-e037aa748504','10 Reasons Why You Should Switch to Linux | by Samuel Martins | Quick Code | Medium','This is going to be a pretty straight forward article. I am aware that it might get a lot of negative comments from Windows users just from reading the title alone. I believe these are the reasons…',0,'2021-03-03 10:05:57','2021-03-03 10:05:57',1,'https://miro.medium.com/max/1200/1*07mqby_OrbwOZ-sr5cX5lQ.jpeg',1),(27,'https://www.tecmint.com/install-different-php-versions-in-ubuntu/','How to Install Different PHP (5.6, 7.0 and 7.1) Versions in Ubuntu','In this article, we will explain how to install and set different versions of PHP - PHP 5.6, 7.x and 8.0 in Ubuntu with most required PHP extensions.',0,'2021-03-03 10:07:36','2021-03-03 10:07:36',1,'https://www.tecmint.com/wp-content/uploads/2017/07/Install-Different-PHP-Versions-in-Ubuntu.png',1),(28,'https://github.blog/2021-03-01-guide-devops-automation-ci-cd-github-infocus/','Your guide to DevOps automation and CI/CD at GitHub InFocus - The GitHub Blog','A Q&A on what to expect, from CI/CD to DevSecOps, at this week\'s GitHub InFocus, with virtual hosts Jennie, Marko, and Daniel.',0,'2021-03-03 13:00:48','2021-03-03 13:00:48',1,'https://github.blog/wp-content/uploads/2021/03/1200x630-GitHub_InFocus-Overall.png?fit=1200%2C630',0),(29,'https://wiki.php.net/rfc/new_in_initializers','PHP: rfc:new_in_initializers','PHP: rfc:new_in_initializers',0,'2021-03-04 10:16:28','2021-03-04 10:16:28',1,NULL,0),(30,'https://les-tilleuls.coop/fr/blog/article/panther-1-0','Sortie de Panther 1.0 ! - Les-Tilleuls.coop','Read the original version of this post written by Kévin Dunglas.  2 ans après sa première publication, nous sommes ravis de vous annoncer la disponibilité',0,'2021-03-04 12:48:01','2021-03-04 12:48:01',1,'/assets/logo.png',0),(31,'https://www.bram.us/2021/02/23/the-future-of-css-scroll-linked-animations-part-1/','The Future of CSS: Scroll-Linked Animations with @scroll-timeline (Part 1) – Bram.us','The Future of CSS: Scroll-Linked Animations with @scroll-timeline (Part 1) – Bram.us',0,'2021-03-04 12:50:36','2021-03-04 12:50:36',1,'https://www.bram.us/wordpress/wp-content/uploads/2021/02/css-scroll-timeline-parallax-cover-to-sticky-header-short-10fps.gif',0),(32,'https://www.jesuisundev.com/securite-web/','Sécurité web : l\'indispensable à savoir - Je suis un dev','Laisser un énorme trou de sécurité est l\'un des pires truc que tu peux faire. Les développeurs ignorent presque tout du sujet.',0,'2021-03-08 16:32:48','2021-03-08 16:32:48',1,'https://www.jesuisundev.com/wp-content/uploads/2021/03/ruG7pq8.jpg',0),(33,'https://netflixtechblog.com/beyond-rest-1b76f7c20ef6','Beyond REST: Rapid Development With GraphQL Microservices | Netflix TechBlog','A case study in successful rapid application development using the Graphile GraphQL library as a backend instead of a traditional REST API.',0,'2021-03-09 10:10:34','2021-03-09 10:10:34',1,'https://miro.medium.com/max/1200/0*QupchUd58_jK8ObO',0),(34,'https://wiki.php.net/rfc/fibers','Nouvelle RFC PHP : fibers','Nouvelle RFC PHP : fibers',0,'2021-03-09 14:04:21','2021-03-09 14:04:21',1,NULL,0),(35,'https://troisjs.github.io/','Home | TroisJS','TroisJS examples and documentation',0,'2021-03-10 07:43:01','2021-03-10 07:43:01',1,NULL,0),(36,'https://blog.jetbrains.com/blog/2021/03/11/projector-is-out/','Access Your IDE Remotely With Projector | JetBrains News','Access Your IDE Remotely With Projector | JetBrains News',0,'2021-03-17 10:14:58','2021-03-17 10:14:58',1,'https://blog.jetbrains.com/wp-content/uploads/2021/03/Blog_1280x720.png',0),(37,'https://medium.com/cstech/power-of-simplicity-sidebar-component-with-vue-and-tailwindcss-eb54fdd2710e','Power of Simplicity — Sidebar Component with Vue and Tailwindcss | by Berk Akgün | ÇSTech | Mar, 2021 | Medium','When I first see Tailwindcss, a utility-first CSS framework, I had similar ideas with most of the developers had. Alright, you are right. However, as Adam Wathan says — the man behind the tailwind —…',0,'2021-03-18 13:26:48','2021-03-18 13:26:48',1,'https://miro.medium.com/max/1200/1*12hnItRbNM7vYqbeekjmfw.png',0),(38,'wiki.php.net/rfc/fibers','La RFC fibers a été accepté','La RFC fibers a été accepté',0,'2021-03-24 09:41:49','2021-03-24 09:42:25',1,NULL,0),(39,'https://github.com/errorname/clean-code-php','GitHub - Errorname/clean-code-php: Concepts de Clean Code adapté au PHP',':bathtub: Concepts de Clean Code adapté au PHP. Contribute to Errorname/clean-code-php development by creating an account on GitHub.',0,'2021-03-30 08:02:59','2021-03-30 08:02:59',1,'https://avatars.githubusercontent.com/u/6669733?s=400&v=4',0),(40,'http://apistylebook.com/','API Stylebook','Collections of resources for API Designers',0,'2021-04-13 14:38:06','2021-04-13 14:38:06',1,NULL,0),(41,'https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/technologiques-modernes-nouveaux/normes-gouvernement-canada-api.html','Normes du gouvernement du Canada sur les API - Canada.ca','Normes du gouvernement du Canada sur les API - Canada.ca',0,'2021-04-13 14:38:28','2021-04-13 14:38:28',1,NULL,0),(42,'https://paramdeo.com/blog/opting-your-website-out-of-googles-floc-network','Opting your Website out of Google\'s FLoC Network - Paramdeo Singh','You can remove your website from Google\'s FLoC rollout by altering HTTP response headers.',0,'2021-04-16 08:15:04','2021-04-16 08:15:04',1,'https://og-paramdeo.vercel.app/Opting your Website out of Google\'s FLoC Network.png?theme=light&md=1&fontSize=80px',0),(43,'https://stitcher.io/blog/fibers-with-a-grain-of-salt','Fibers with a grain of salt - stitcher.io','Thoughts on Fibers in PHP 8.1',0,'2021-04-16 22:29:16','2021-04-16 22:29:16',1,'https://stitcher.io/img/meta/fibers-with-a-grain-of-salt.png',0),(44,'https://dev.to/mis0u/login-link-password-less-with-symfony-1nh2','Login Link (password less) with Symfony - DEV Community','New Security\'s component   Symfony 6 will get a new or maybe I should say an update of the S... Tagged with php, symfony.',0,'2021-04-16 22:34:50','2021-04-16 22:34:50',1,'https://res.cloudinary.com/practicaldev/image/fetch/s--MgSKD9X0--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2vsskq7sn1o9518j1gdt.png',0),(45,'https://medium.com/mestredev/adapter-php-8-75e00034ae48','Adapter + PHP 8 ? (Design Patterns) | by Gabriel Anhaia | MestreDev | Apr, 2021 | Medium','Have you ever faced a situation where you had to implement a new feature/module in a legacy project that wasn’t following code best practices? I know how it is tough! We want to write a clean code…',0,'2021-04-19 19:48:21','2021-04-19 19:48:21',1,'https://miro.medium.com/max/1200/1*41Ot99nNPTMxOfkMovDWeA.png',0),(46,'https://github.com/loophp/collection','GitHub - loophp/collection: A (memory) friendly, easy, lazy and modular collection class.','A (memory) friendly, easy, lazy and modular collection class. - loophp/collection',0,'2021-04-30 09:40:08','2021-04-30 09:40:08',1,'https://opengraph.githubassets.com/5bdec03bc7005e8472a795df02d95eb1f5083b015724d51b3c331fe9dc6ca22a/loophp/collection',0),(47,'https://stitcher.io/blog/parallel-php','Running PHP code in parallel, the easy way - stitcher.io','I made a no-nonsensewrapper around pcntl_fork',0,'2021-05-03 08:10:08','2021-05-03 08:10:08',1,'https://stitcher.io/img/meta/parallel-php.png',0),(48,'https://kool.dev/','kool.dev','Génèrateur de configuration docker pour divers framework',0,'2021-05-21 12:38:05','2021-05-21 12:38:05',1,NULL,0),(49,'https://medium.com/tiller-systems/pourquoi-avoir-choisi-dutiliser-l-architecture-cqrs-e04c082f8b5f','Pourquoi avoir choisi d’utiliser l’architecture CQRS ? | by Vincent Oliveira | Tiller | Medium','Tiller est une solution de caisse enregistreuse intelligente au service des restaurateurs et commerçants. L’objectif est d’aider les restaurateurs et commerçants à optimiser leur business en…',0,'2021-05-27 12:38:09','2021-05-27 12:38:09',1,'https://miro.medium.com/max/775/1*feM_-VHhK670LlEQekesKg.png',0);
/*!40000 ALTER TABLE `link` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;

-- Dumped table `link` with 48 row(s)
--

--
-- Table structure for table `link_tag`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE IF NOT EXISTS  `link_tag` (
  `link_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`link_id`,`tag_id`),
  KEY `IDX_4FF23AB8ADA40271` (`link_id`),
  KEY `IDX_4FF23AB8BAD26311` (`tag_id`),
  CONSTRAINT `FK_4FF23AB8ADA40271` FOREIGN KEY (`link_id`) REFERENCES `link` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_4FF23AB8BAD26311` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `link_tag`
--

LOCK TABLES `link_tag` WRITE;
/*!40000 ALTER TABLE `link_tag` DISABLE KEYS */;
SET autocommit=0;
INSERT INTO `link_tag` VALUES (1,1),(3,5),(4,6),(5,3),(5,7),(5,8),(6,3),(6,7),(6,8),(7,9),(8,10),(9,5),(9,8),(9,11),(10,14),(11,5),(11,11),(11,14),(12,15),(12,16),(12,17),(13,5),(13,8),(13,18),(13,19),(14,5),(15,20),(16,15),(16,21),(17,5),(17,8),(17,18),(18,5),(19,5),(19,18),(19,22),(20,3),(21,3),(21,23),(22,5),(22,24),(22,25),(23,26),(23,27),(24,3),(24,28),(25,5),(25,29),(26,1),(26,27),(27,5),(28,30),(28,31),(28,32),(29,5),(29,33),(30,5),(30,24),(30,34),(31,20),(32,16),(32,35),(33,29),(33,36),(34,5),(34,33),(35,3),(35,7),(35,28),(35,37),(36,38),(36,39),(37,7),(37,8),(37,20),(38,5),(39,5),(39,25),(39,40),(40,9),(40,41),(41,9),(42,35),(42,42),(43,5),(43,43),(44,5),(44,24),(45,5),(45,44),(46,5),(46,45),(47,5),(48,8),(48,19),(49,5),(49,25);
/*!40000 ALTER TABLE `link_tag` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;

-- Dumped table `link_tag` with 97 row(s)
--

--
-- Table structure for table `links_views`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE IF NOT EXISTS `links_views` (
  `user_id` int(11) NOT NULL,
  `link_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`link_id`),
  KEY `IDX_F211677CA76ED395` (`user_id`),
  KEY `IDX_F211677CADA40271` (`link_id`),
  CONSTRAINT `FK_F211677CA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_F211677CADA40271` FOREIGN KEY (`link_id`) REFERENCES `link` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `links_views`
--

LOCK TABLES `links_views` WRITE;
/*!40000 ALTER TABLE `links_views` DISABLE KEYS */;
SET autocommit=0;
INSERT INTO `links_views` VALUES (1,7),(1,10),(1,11),(1,12),(1,18),(1,20),(1,22),(1,27),(1,35),(1,39),(1,42),(2,15),(2,19),(7,23),(7,33);
/*!40000 ALTER TABLE `links_views` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;

-- Dumped table `links_views` with 15 row(s)
--

--
-- Table structure for table `migration_versions`
--

-- Dumped table `migration_versions` with 12 row(s)
--

--
-- Table structure for table `notification`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE IF NOT EXISTS  `notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `channel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_BF5476CAA76ED395` (`user_id`),
  CONSTRAINT `FK_BF5476CAA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
SET autocommit=0;
INSERT INTO `notification` VALUES (1,2,'Le lien Sécurité web : l\'indispensable à savoir - Je suis un dev a été ajouté.','link_created','2021-03-08 16:32:48','2021-03-08 16:32:48'),(2,2,'Le lien Beyond REST: Rapid Development With GraphQL Microservices | Netflix TechBlog a été ajouté.','link_created','2021-03-09 10:10:34','2021-03-09 10:10:34'),(3,7,'Le lien Beyond REST: Rapid Development With GraphQL Microservices | Netflix TechBlog a été ajouté.','link_created','2021-03-09 10:10:34','2021-03-09 10:10:45'),(4,2,'Le lien Nouvelle RFC PHP : fibers a été ajouté.','link_created','2021-03-09 14:04:21','2021-03-09 14:04:21'),(5,7,'Le lien Nouvelle RFC PHP : fibers a été ajouté.','link_created','2021-03-09 14:04:21','2021-03-09 14:04:21'),(6,2,'Le lien Home | TroisJS a été ajouté.','link_created','2021-03-10 07:43:01','2021-03-10 07:43:01'),(7,7,'Le lien Home | TroisJS a été ajouté.','link_created','2021-03-10 07:43:01','2021-03-10 07:43:01'),(8,2,'Le lien Access Your IDE Remotely With Projector | JetBrains News a été ajouté.','link_created','2021-03-17 10:14:58','2021-03-17 10:14:58'),(9,7,'Le lien Access Your IDE Remotely With Projector | JetBrains News a été ajouté.','link_created','2021-03-17 10:14:58','2021-03-17 10:14:58'),(10,2,'Le lien Power of Simplicity — Sidebar Component with Vue and Tailwindcss | by Berk Akgün | ÇSTech | Mar, 2021 | Medium a été ajouté.','link_created','2021-03-18 13:26:48','2021-03-18 13:26:48'),(11,7,'Le lien Power of Simplicity — Sidebar Component with Vue and Tailwindcss | by Berk Akgün | ÇSTech | Mar, 2021 | Medium a été ajouté.','link_created','2021-03-18 13:26:48','2021-03-18 13:26:48'),(12,2,'Le lien La RFC fibers a été accepté a été ajouté.','link_created','2021-03-24 09:41:49','2021-03-24 09:41:49'),(13,7,'Le lien La RFC fibers a été accepté a été ajouté.','link_created','2021-03-24 09:41:49','2021-03-24 09:41:49'),(14,2,'Le lien La RFC fibers a été accepté a été ajouté.','link_created','2021-03-24 09:42:25','2021-03-24 09:42:25'),(15,7,'Le lien La RFC fibers a été accepté a été ajouté.','link_created','2021-03-24 09:42:25','2021-03-24 09:42:25'),(16,2,'Le lien GitHub - Errorname/clean-code-php: Concepts de Clean Code adapté au PHP a été ajouté.','link_created','2021-03-30 08:02:59','2021-03-30 08:02:59'),(17,7,'Le lien GitHub - Errorname/clean-code-php: Concepts de Clean Code adapté au PHP a été ajouté.','link_created','2021-03-30 08:02:59','2021-03-30 08:02:59'),(18,2,'Le lien API Stylebook a été ajouté.','link_created','2021-04-13 14:38:06','2021-04-13 14:38:06'),(19,7,'Le lien API Stylebook a été ajouté.','link_created','2021-04-13 14:38:06','2021-04-13 14:38:06'),(20,2,'Le lien Normes du gouvernement du Canada sur les API - Canada.ca a été ajouté.','link_created','2021-04-13 14:38:28','2021-04-13 14:38:28'),(21,7,'Le lien Normes du gouvernement du Canada sur les API - Canada.ca a été ajouté.','link_created','2021-04-13 14:38:28','2021-04-13 14:38:28'),(22,2,'Le lien Opting your Website out of Google\'s FLoC Network - Paramdeo Singh a été ajouté.','link_created','2021-04-16 08:15:04','2021-04-16 08:15:04'),(23,7,'Le lien Opting your Website out of Google\'s FLoC Network - Paramdeo Singh a été ajouté.','link_created','2021-04-16 08:15:04','2021-04-16 08:15:04'),(24,2,'Le lien Fibers with a grain of salt - stitcher.io a été ajouté.','link_created','2021-04-16 22:29:16','2021-04-16 22:29:16'),(25,7,'Le lien Fibers with a grain of salt - stitcher.io a été ajouté.','link_created','2021-04-16 22:29:16','2021-04-16 22:29:16'),(26,2,'Le lien Login Link (password less) with Symfony - DEV Community a été ajouté.','link_created','2021-04-16 22:34:50','2021-04-16 22:34:50'),(27,7,'Le lien Login Link (password less) with Symfony - DEV Community a été ajouté.','link_created','2021-04-16 22:34:50','2021-04-16 22:34:50'),(28,2,'Le lien Adapter + PHP 8 ? (Design Patterns) | by Gabriel Anhaia | MestreDev | Apr, 2021 | Medium a été ajouté.','link_created','2021-04-19 19:48:21','2021-04-19 19:48:21'),(29,7,'Le lien Adapter + PHP 8 ? (Design Patterns) | by Gabriel Anhaia | MestreDev | Apr, 2021 | Medium a été ajouté.','link_created','2021-04-19 19:48:21','2021-04-19 19:48:21'),(30,2,'Le lien GitHub - loophp/collection: A (memory) friendly, easy, lazy and modular collection class. a été ajouté.','link_created','2021-04-30 09:40:08','2021-04-30 09:40:08'),(31,7,'Le lien GitHub - loophp/collection: A (memory) friendly, easy, lazy and modular collection class. a été ajouté.','link_created','2021-04-30 09:40:08','2021-04-30 09:40:08'),(32,2,'Le lien Running PHP code in parallel, the easy way - stitcher.io a été ajouté.','link_created','2021-05-03 08:10:08','2021-05-03 08:10:08'),(33,7,'Le lien Running PHP code in parallel, the easy way - stitcher.io a été ajouté.','link_created','2021-05-03 08:10:08','2021-05-03 08:10:08'),(34,2,'Le lien kool.dev a été ajouté.','link_created','2021-05-21 12:38:05','2021-05-21 12:38:05'),(35,7,'Le lien kool.dev a été ajouté.','link_created','2021-05-21 12:38:05','2021-05-21 12:38:05'),(36,2,'Le lien Pourquoi avoir choisi d’utiliser l’architecture CQRS ? | by Vincent Oliveira | Tiller | Medium a été ajouté.','link_created','2021-05-27 12:38:09','2021-05-27 12:38:09'),(37,7,'Le lien Pourquoi avoir choisi d’utiliser l’architecture CQRS ? | by Vincent Oliveira | Tiller | Medium a été ajouté.','link_created','2021-05-27 12:38:09','2021-05-27 12:38:09');
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;

-- Dumped table `notification` with 37 row(s)
--

--
-- Table structure for table `tag`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE IF NOT EXISTS  `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
SET autocommit=0;
INSERT INTO `tag` VALUES (1,'linux'),(2,'deno'),(3,'javascript'),(4,'react'),(5,'php'),(6,'git'),(7,'vuejs'),(8,'framework'),(9,'api'),(10,'archi'),(11,'symony'),(13,'architecture logiciel'),(14,'clean architecture'),(15,'outils'),(16,'web'),(17,'divers'),(18,'laravel'),(19,'docker'),(20,'css'),(21,'astuces'),(22,'test unitaire'),(23,'typescript'),(24,'symfony'),(25,'architecture'),(26,'terminal'),(27,'windows'),(28,'vite'),(29,'graphql'),(30,'github'),(31,'ci'),(32,'déploiement'),(33,'rfc'),(34,'panther'),(35,'securité'),(36,'rest'),(37,'3d'),(38,'ide'),(39,'jetbrains'),(40,'solid'),(41,'design architecture'),(42,'google'),(43,'asynchrone'),(44,'patterns'),(45,'collection');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;

-- Dumped table `tag` with 44 row(s)
--

--
-- Table structure for table `user`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE IF NOT EXISTS  `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
SET autocommit=0;
INSERT INTO `user` VALUES (1,'TuxBoyBzh','benoit.mallo@gmail.com','[\"ROLE_ADMIN\"]','$argon2id$v=19$m=65536,t=4,p=1$Q096dlUwdC9WMk9lUFF2Qw$GyQu0qMKycc7u8xDQeY2ZQstwQ2nkAlzgCOQAi3Ch9A','0000-00-00 00:00:00','2021-02-09 09:42:42'),(2,'mael','mael34@test.com','[\"ROLE_USER\"]','$argon2id$v=19$m=65536,t=4,p=1$Yk9hZUtjLkRYUThxUDQxRg$lHCoN537dGKz2XiMdTztWKsbyOxn8QxrBB0RHkTA2h4','2021-02-23 14:31:50','2021-03-09 10:08:39'),(7,'Maël','mael@test.com','[\"ROLE_USER\"]','$argon2id$v=19$m=65536,t=4,p=1$WExGZFRWZFo3emNLS21UTQ$hWRAeB+JuVEhwsrF7fzoeIduxUFXnQyG5Hg+G2b5I/E','2021-03-09 10:09:02',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;

-- Dumped table `user` with 3 row(s)
--

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on: Fri, 04 Jun 2021 10:06:34 +0000
