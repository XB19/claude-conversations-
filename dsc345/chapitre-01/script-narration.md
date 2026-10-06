# DSC 345 — Chapitre 1 — Script de narration (Colossyan)

Total : 763 mots, soit environ 5 à 6 minutes.

## Slide 1 (80 mots)

Bonjour à toutes et à tous, et bienvenue dans le cours DSC trois cent quarante-cinq, consacré au Machine Learning, c'est-à-dire à l'apprentissage automatique. Ce premier chapitre est une introduction au Machine Learning et au cycle de vie d'un projet. Avant d'entrer dans les algorithmes, nous allons comprendre ce qu'est réellement l'apprentissage automatique, quelles grandes familles de problèmes il permet de résoudre, et comment se déroule concrètement un projet, depuis la question de départ jusqu'au suivi du modèle en production. Commençons.

## Slide 2 (81 mots)

Voici les objectifs pédagogiques de ce chapitre. Premièrement, comprendre la place du Machine Learning dans l'écosystème de la science des données. Deuxièmement, identifier les différentes catégories de problèmes de Machine Learning. Troisièmement, comprendre les étapes clés d'un projet de modélisation, de la collecte des données jusqu'à l'interprétation des résultats. Et quatrièmement, situer le Machine Learning par rapport aux statistiques classiques et à l'intelligence artificielle. Ces repères vous accompagneront tout au long du cours, alors prenez le temps de bien les assimiler.

## Slide 3 (91 mots)

Qu'est-ce que le Machine Learning ? C'est la branche de l'intelligence artificielle qui permet à un système d'apprendre à partir de données, sans être programmé règle par règle. Au lieu d'écrire des instructions figées, on fournit des exemples, et l'algorithme en extrait des régularités qu'il généralise à de nouvelles observations. Tom Mitchell en a donné une définition de référence en mille neuf cent quatre-vingt-dix-sept. Un programme apprend d'une expérience E, pour une tâche T et une mesure de performance P, si sa performance à T, mesurée par P, s'améliore avec E.

## Slide 4 (91 mots)

Il existe trois grandes catégories d'apprentissage. En apprentissage supervisé, chaque exemple possède une étiquette connue. On distingue la régression, quand la cible est une valeur numérique, comme le prix d'un logement, et la classification, quand c'est une catégorie, comme spam ou non spam. En apprentissage non supervisé, il n'y a pas d'étiquette. L'algorithme découvre seul une structure, des groupes, une réduction de dimension ou des règles d'association. Enfin, en apprentissage par renforcement, un agent agit, reçoit des récompenses, et apprend à maximiser leur cumul, comme en robotique ou dans les jeux.

## Slide 5 (87 mots)

Un projet de Machine Learning ne se résume pas à entraîner un algorithme. C'est un processus itératif, en plusieurs étapes. D'abord, le cadrage du problème métier, qui traduit un besoin en problème de régression, de classification ou de clustering, et fixe la métrique de succès. Ensuite, la collecte des données, en veillant à leur qualité et à leur représentativité. Puis la préparation, avec le nettoyage, les valeurs manquantes, l'encodage et la normalisation. Vient l'analyse exploratoire, pour visualiser les données. Et enfin la sélection et l'entraînement du modèle.

## Slide 6 (81 mots)

Le cycle de vie se poursuit avec trois étapes. L'évaluation et la validation mesurent la performance sur des données que le modèle n'a jamais vues, grâce à des métriques adaptées et à la validation croisée. L'optimisation des hyperparamètres ajuste les réglages du modèle, pour améliorer sa capacité à généraliser. Et le déploiement intègre le modèle dans un système de production, où il sera réellement utilisé. Retenez qu'un modèle excellent en laboratoire, mais jamais déployé, n'apporte aucune valeur à l'organisation. Pensez-y toujours.

## Slide 7 (84 mots)

Dernière étape, le suivi et l'interprétation. Il faut surveiller la performance dans le temps, détecter la dérive des données, et réentraîner le modèle si nécessaire. Puis le cycle recommence. Situons maintenant le Machine Learning. Les statistiques classiques cherchent surtout à comprendre et expliquer, avec l'inférence et la significativité. Le Machine Learning privilégie la performance prédictive, quitte à utiliser des modèles moins interprétables. Et l'intelligence artificielle est un champ plus vaste, qui englobe le Machine Learning, mais aussi le raisonnement symbolique ou les systèmes experts.

## Slide 8 (82 mots)

Retenons les points clés. Le Machine Learning apprend une fonction de prédiction à partir de données, plutôt qu'à partir de règles codées à la main. Il existe trois grandes familles, l'apprentissage supervisé, avec la régression et la classification, l'apprentissage non supervisé, avec le clustering et la réduction de dimension, et l'apprentissage par renforcement. Un projet suit un cycle itératif, cadrage, collecte, préparation, exploration, modélisation, évaluation, déploiement et suivi. Enfin, le Machine Learning privilégie la prédiction, là où la statistique classique privilégie l'explication.

## Slide 9 (86 mots)

Voici les corrigés. Premier exercice, prédire une consommation électrique est une régression supervisée. Regrouper des clients sans étiquette est un problème non supervisé. Entraîner un robot dans un labyrinthe relève du renforcement. Et détecter des fraudes est une classification supervisée. Deuxième exercice, pour l'attrition des abonnés, déroulez les huit étapes, du cadrage jusqu'au suivi du modèle. Troisième exercice, un modèle très prédictif peut rester une boîte noire, qui ne révèle pas les causes du phénomène. Prenez le temps de faire ces exercices, et notez vos questions.
