# DSC 324 — Chapitre 9 — Script de narration (Colossyan)

Total : 1092 mots, soit environ 7 à 8 minutes.

## Slide 1 (83 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre neuf du cours DSC trois cent vingt-quatre, consacré à la classification. Après le clustering, qui découvre des groupes inconnus, nous passons à la classification, qui apprend à prédire des catégories déjà connues. C'est l'une des tâches les plus répandues en science des données. Accorder ou non un crédit, détecter une fraude, prédire la résiliation d'un client, ou poser un diagnostic médical. Dans ce chapitre, nous verrons ses principes et ses principales méthodes.

## Slide 2 (87 mots)

Voici les objectifs pédagogiques de ce chapitre. Premièrement, expliquer les principes fondamentaux de la classification. Deuxièmement, distinguer clairement une problématique de classification d'une problématique de clustering, une confusion fréquente. Troisièmement, identifier les caractéristiques, c'est-à-dire les variables, pertinentes pour classer des observations. Et quatrièmement, appliquer une méthode de classification appropriée à un problème donné. Nous ferons pour cela un panorama des principales méthodes, avec leurs forces, leurs limites et leurs conditions d'utilisation. Commençons par le principe même de la classification, et par ce qui la distingue du clustering.

## Slide 3 (82 mots)

La classification est une méthode d'apprentissage supervisé. On dispose d'un ensemble d'observations dont la catégorie, appelée classe, est déjà connue. À partir de ces exemples, l'algorithme apprend une règle de décision, qui permet ensuite de prédire la catégorie de nouvelles observations, dont la classe est inconnue. Par exemple, à partir de l'historique des clients qui ont remboursé ou non leur prêt, on apprend à prédire le risque d'un nouveau demandeur. C'est le pendant supervisé du clustering étudié aux chapitres sept et huit.

## Slide 4 (82 mots)

Voici une distinction fondamentale. En clustering, seules les variables X sont observées, aucune étiquette n'est connue, et l'on cherche à découvrir des groupes. En classification, les variables X et la catégorie Y sont observées pendant l'apprentissage, et l'on cherche à prédire Y sur de nouvelles observations. Cette différence conditionne toute la démarche. Une classification se valide en comparant les prédictions à la vraie catégorie d'observations mises de côté, les données de test. Un clustering, lui, ne dispose d'aucune vérité de référence comparable.

## Slide 5 (80 mots)

Toutes les variables disponibles ne sont pas utiles pour distinguer les catégories. Une variable pertinente présente des distributions nettement différentes selon la catégorie observée. À l'inverse, une variable dont la distribution est quasiment identique dans toutes les catégories apporte peu d'information, et peut même introduire du bruit dans le modèle. L'analyse exploratoire du chapitre deux est ici très précieuse, en particulier les boxplots comparatifs par catégorie. Ils permettent de repérer les variables discriminantes avant toute modélisation, en un coup d'oeil.

## Slide 6 (80 mots)

Voici le panorama des principales méthodes de classification que nous allons parcourir. Premièrement, la régression logistique, simple et interprétable. Deuxièmement, l'analyse discriminante, dans ses versions linéaire et quadratique, notées LDA et QDA. Troisièmement, le classifieur Naive Bayes, fondé sur le théorème de Bayes. Et quatrièmement, les arbres de décision et d'autres méthodes non linéaires, déjà rencontrées dans les cours de Machine Learning. Chaque méthode repose sur des hypothèses différentes, et convient donc à des situations différentes. Voyons-les une par une.

## Slide 7 (86 mots)

La régression logistique modélise directement la probabilité d'appartenir à une catégorie. Elle applique une fonction logistique à une combinaison linéaire des variables explicatives. La probabilité que Y vaille un, sachant X, est égale à un divisé par un plus exponentielle de moins la combinaison bêta zéro plus bêta un X un, jusqu'à bêta p X p. Cette fonction transforme n'importe quel nombre en une probabilité entre zéro et un. Simple et interprétable, la régression logistique constitue souvent un excellent modèle de référence, que l'on appelle baseline.

## Slide 8 (85 mots)

L'analyse discriminante suppose que chaque catégorie suit une loi normale multivariée. Elle classe une nouvelle observation dans la catégorie dont elle est la plus proche, selon cette hypothèse probabiliste. Il en existe deux versions. L'analyse discriminante linéaire, ou LDA, suppose une même matrice de covariance pour toutes les catégories, ce qui produit des frontières de décision linéaires. L'analyse discriminante quadratique, ou QDA, autorise des matrices de covariance différentes par catégorie, ce qui donne des frontières plus flexibles, non linéaires. Le choix dépend donc des données.

## Slide 9 (81 mots)

Le classifieur Naive Bayes applique le théorème de Bayes, en faisant une hypothèse simplificatrice. Il suppose que toutes les variables explicatives sont indépendantes les unes des autres, à l'intérieur de chaque catégorie. Cette hypothèse est dite naïve, car elle est rarement vraie en pratique. Et pourtant, la méthode fonctionne souvent très bien. Elle est particulièrement rapide, et performante sur des données de grande dimension, comme la classification de textes, par exemple pour trier automatiquement les courriels indésirables. Simple et redoutablement efficace.

## Slide 10 (81 mots)

Enfin, d'autres méthodes restent tout à fait mobilisables. Les arbres de décision, qui posent une succession de questions simples sur les variables. Les k plus proches voisins, qui classent une observation selon la catégorie majoritaire de ses voisins les plus proches. Et les machines à vecteurs de support, qui cherchent la frontière séparant au mieux les catégories. Vous les avez déjà rencontrées dans les cours de Machine Learning. Elles sont particulièrement utiles lorsque les frontières entre catégories sont fortement non linéaires.

## Slide 11 (87 mots)

Comment choisir une méthode adaptée ? Privilégiez la régression logistique pour un premier modèle interprétable, surtout si les catégories sont à peu près linéairement séparables. Choisissez la LDA ou la QDA lorsque l'hypothèse de normalité multivariée est raisonnable, et que le nombre d'observations par catégorie est limité. Naive Bayes est très efficace en grande dimension, avec des variables largement indépendantes. Enfin, préférez les méthodes non linéaires, arbres, k plus proches voisins ou machines à vecteurs de support, lorsque les frontières sont complexes et que l'interprétabilité est secondaire.

## Slide 12 (82 mots)

Retenons les points clés. La classification est une méthode supervisée, qui apprend à partir d'exemples étiquetés à prédire la catégorie de nouvelles observations. Elle se distingue du clustering par l'existence d'une vérité de référence, qui permet d'évaluer objectivement les prédictions. Une variable pertinente présente des distributions nettement différentes selon la catégorie. Enfin, la régression logistique, l'analyse discriminante, Naive Bayes et les méthodes non linéaires forment le panorama des principales approches. Au prochain chapitre, nous verrons comment évaluer ces modèles. Ce sera essentiel.

## Slide 13 (96 mots)

Voici les corrigés. Un, si l'ancienneté a la même distribution chez les clients qui partent et ceux qui restent, elle ne discrimine pas les deux catégories. Elle est peu utile, et peut même ajouter du bruit. Deux, sur des données clients, chercher des segments inconnus est un clustering, tandis que prédire si un client va résilier, à partir d'exemples passés étiquetés, est une classification. Trois, la LDA suppose une même covariance pour toutes les catégories, ce qui n'est pas le cas ici. On lui préférera la QDA, qui autorise des covariances différentes et des frontières courbes.
