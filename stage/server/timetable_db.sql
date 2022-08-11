CREATE DATABASE `timetable_db` ;
USE `timetable_db`;


CREATE TABLE `annees_scolaires` (
  `id` varchar(45)  NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `jours` (
  `jour` varchar(10) NOT NULL,
  PRIMARY KEY (`jour`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `profs` (
  `matricule` varchar(10)  NOT NULL,
  `nom` varchar(45)   NOT NULL,
  `email` varchar(45)   DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `emploi_profs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_prof` varchar(10)  NOT NULL,
  `id_jour` varchar(10)  NOT NULL,
  `seance1` varchar(45)  DEFAULT NULL,
  `seance2` varchar(45)  DEFAULT NULL,
  `seance3` varchar(45)  DEFAULT NULL,
  `seance4` varchar(45)  DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prof_idx` (`id_prof`),
  KEY `jour_idx` (`id_jour`),
  CONSTRAINT `jour` FOREIGN KEY (`id_jour`) REFERENCES `jours` (`jour`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `prof` FOREIGN KEY (`id_prof`) REFERENCES `profs` (`matricule`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `filieres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) NOT NULL,
  `nmbr_niveaux` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `heurs_de_depart` (
  `jour` varchar(45)  NOT NULL,
  `heur_matin` varchar(45)  NOT NULL,
  `heur_soir` varchar(45)  NOT NULL,
  PRIMARY KEY (`jour`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `niveaux` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_filiere` int(11) NOT NULL,
  `ordonnancement` int(11) NOT NULL,
  `nmbr_modules` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_filiere_idx` (`id_filiere`),
  CONSTRAINT `id_filiere` FOREIGN KEY (`id_filiere`) REFERENCES `filieres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `emploi_niveaux` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_niveau` int(11) NOT NULL,
  `id_jour` varchar(10)  NOT NULL,
  `seance1` varchar(45)  DEFAULT NULL,
  `seance2` varchar(45)  DEFAULT NULL,
  `seance3` varchar(45)  DEFAULT NULL,
  `seance4` varchar(45)  DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `jourr_idx` (`id_jour`),
  KEY `niveau_idx` (`id_niveau`),
  CONSTRAINT `jourr` FOREIGN KEY (`id_jour`) REFERENCES `jours` (`jour`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `niveau` FOREIGN KEY (`id_niveau`) REFERENCES `niveaux` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_niveau` int(11) NOT NULL,
  `semestre` int(11) DEFAULT NULL,
  `nom` varchar(45) NOT NULL,
  `nmbr_ss_modules` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_niveau_idx` (`id_niveau`),
  CONSTRAINT `id_niveau` FOREIGN KEY (`id_niveau`) REFERENCES `niveaux` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `salles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nmbr_places` int(11) NOT NULL,
  `reservee` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `sous_modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_module` int(11) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `nmbr_semaines` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_module_idx` (`id_module`),
  CONSTRAINT `id_module` FOREIGN KEY (`id_module`) REFERENCES `modules` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `seances` (
  `id` int(11) NOT NULL,
  `id_ss_modules` int(11) NOT NULL,
  `type` varchar(45) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ss_module_idx` (`id_ss_modules`),
  CONSTRAINT `id_ss_modules` FOREIGN KEY (`id_ss_modules`) REFERENCES `sous_modules` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `semestres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_annee_scolaire` varchar(45) NOT NULL,
  `ordonnancement` int(11) NOT NULL,
  `date_debut_saisir_donnees` date DEFAULT NULL,
  `periode_saisir_donnes` int(11) DEFAULT NULL,
  `date_debut_semestre` date DEFAULT NULL,
  `nmbr_semaines` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_annee_scolaire_idx` (`id_annee_scolaire`),
  CONSTRAINT `id_annee_scolaire` FOREIGN KEY (`id_annee_scolaire`) REFERENCES `annees_scolaires` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `info_groupes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_niveau` int(11) NOT NULL,
  `id_ss_module` int(11) NOT NULL,
  `nmbr_grp_cours` int(11) NOT NULL DEFAULT 1,
  `nmbr_grp_td` int(11) NOT NULL DEFAULT 1,
  `nmbr_grp_tp` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `id_niveau_idx` (`id_niveau`),
  KEY `id_ss_module_idx` (`id_ss_module`),
  CONSTRAINT `info_groupes_ibfk_1` FOREIGN KEY (`id_niveau`) REFERENCES `niveaux` (`id`),
  CONSTRAINT `info_groupes_ibfk_2` FOREIGN KEY (`id_ss_module`) REFERENCES `sous_modules` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;





