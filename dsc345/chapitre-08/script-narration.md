# DSC 345 — Chapitre 8 — Script de narration (Colossyan)

Total : 924 mots, soit environ 6 à 7 minutes.

## Slide 1 (83 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre huit du cours DSC trois cent quarante-cinq. Nous entrons dans l'apprentissage non supervisé, avec un premier thème, la réduction de dimensionnalité. Jusqu'ici, nos données comportaient une cible à prédire. Désormais, il n'y en a plus. L'objectif est de découvrir la structure des données elles-mêmes. Et lorsqu'elles comportent des dizaines, voire des centaines de variables, il devient essentiel de les résumer dans un espace plus petit, plus facile à visualiser et à exploiter.

## Slide 2 (83 mots)

Voici les objectifs pédagogiques de ce chapitre. Premièrement, comprendre les objectifs de la réduction de dimensionnalité, et les problèmes qu'elle résout. Deuxièmement, expliquer le fonctionnement de trois techniques majeures, l'analyse en composantes principales, appelée ACP, le t-SNE et l'UMAP. Troisièmement, appliquer ces techniques à des jeux de données réels. Et quatrièmement, interpréter correctement les résultats d'une réduction de dimensionnalité, en évitant les pièges d'interprétation, qui sont nombreux, notamment avec le t-SNE. Commençons par la question la plus simple, pourquoi réduire la dimension ?

## Slide 3 (83 mots)

Pourquoi réduire la dimensionnalité ? Quand le nombre de variables devient très élevé, plusieurs difficultés apparaissent. La malédiction de la dimensionnalité, vue au chapitre cinq, qui rend les distances peu discriminantes. L'augmentation du temps de calcul. Le risque de surapprentissage, car le modèle dispose de trop de variables pour trop peu d'observations. Et la difficulté à visualiser des données au-delà de trois dimensions. La réduction de dimensionnalité représente l'essentiel de l'information dans un espace plus petit, pour visualiser, compresser, ou préparer une modélisation.

## Slide 4 (88 mots)

Commençons par l'analyse en composantes principales. L'ACP cherche un nouveau système d'axes, les composantes principales, qui sont des combinaisons linéaires des variables d'origine, orthogonales entre elles. La première composante capture le maximum de variance, la deuxième le maximum de variance restante, et ainsi de suite. Mathématiquement, on décompose la matrice de covariance. Les vecteurs propres donnent les directions des composantes, et les valeurs propres la variance expliquée par chacune. En pratique, on garde les premières composantes, qui expliquent par exemple quatre-vingt-dix ou quatre-vingt-quinze pour cent de la variance.

## Slide 5 (81 mots)

Voici un point de vigilance essentiel pour l'ACP. Elle suppose des relations linéaires entre les variables, et elle est sensible à leur échelle. Une standardisation préalable est donc indispensable. Sinon, les variables à forte variance dominent artificiellement les composantes principales. Imaginez un revenu exprimé en euros et un âge en années. Sans standardisation, la première composante ne refléterait presque que le revenu, simplement parce que ses valeurs sont beaucoup plus grandes. Les résultats seraient alors trompeurs. Standardisez toujours avant une ACP.

## Slide 6 (82 mots)

Passons au t-SNE, pour t-distributed Stochastic Neighbor Embedding. C'est une technique non linéaire, conçue spécifiquement pour la visualisation, en deux ou trois dimensions. Contrairement à l'ACP, il ne cherche pas à préserver la variance globale, mais la structure de voisinage local. Deux points proches dans l'espace d'origine doivent rester proches dans la représentation réduite. Son hyperparamètre principal, la perplexité, règle l'équilibre entre la préservation des structures locales et globales. Le t-SNE produit souvent de très belles cartes, où les groupes apparaissent clairement.

## Slide 7 (82 mots)

Attention toutefois, le t-SNE comporte plusieurs pièges. Les distances globales entre groupes, sur une carte t-SNE, ne sont pas directement interprétables. Seule la proximité locale a un sens. Deux groupes très éloignés sur la carte ne sont donc pas forcément très différents en réalité. Par ailleurs, le t-SNE est coûteux en calcul, et ses résultats varient d'une exécution à l'autre, sauf si l'on fixe une graine aléatoire. Il faut donc l'utiliser pour explorer visuellement, mais jamais pour mesurer des distances entre groupes.

## Slide 8 (86 mots)

Troisième technique, UMAP, pour Uniform Manifold Approximation and Projection. Elle poursuit les mêmes objectifs que le t-SNE, la visualisation de données en haute dimension, mais repose sur des fondements mathématiques différents, issus de la topologie. En pratique, UMAP présente trois avantages. Elle est généralement plus rapide. Elle préserve mieux à la fois les structures locales et une partie de la structure globale. Et elle s'applique plus facilement à de nouvelles observations, sans devoir réentraîner tout le modèle. C'est pourquoi elle est de plus en plus utilisée.

## Slide 9 (84 mots)

Comparons les trois techniques. L'ACP est rapide, interprétable et linéaire. Elle est idéale comme étape de prétraitement avant un autre algorithme, ou pour une première exploration. Le t-SNE est excellent pour visualiser des structures complexes et non linéaires, mais il est peu adapté au prétraitement et aux grands volumes de données. Et UMAP offre un bon compromis entre qualité de visualisation, vitesse de calcul, et capacité à traiter de nouvelles données. Le choix dépend donc de votre objectif, visualiser, comprendre, ou préparer une modélisation.

## Slide 10 (84 mots)

Retenons les points clés. La réduction de dimensionnalité limite la malédiction de la dimensionnalité, et facilite la visualisation et la compression des données. L'ACP projette les données sur des axes orthogonaux, qui maximisent successivement la variance expliquée. Le t-SNE et l'UMAP sont des techniques non linéaires, surtout dédiées à la visualisation, qui préservent la structure de voisinage local. Et la standardisation préalable des variables est indispensable avant une ACP. Ces outils vous seront très utiles avant le clustering, que nous verrons au chapitre neuf.

## Slide 11 (88 mots)

Voici les corrigés. Premier exercice, si dix composantes expliquent quatre-vingt-seize pour cent de la variance, on peut remplacer les deux cents variables par ces dix composantes. On gagne en vitesse et on réduit le surapprentissage, avec une perte d'information minime. Deuxième exercice, sur une carte t-SNE, seule la proximité locale a un sens. La distance entre deux groupes éloignés n'est donc pas une mesure fiable. Troisième exercice, l'ACP convient au prétraitement et à l'interprétation, grâce à sa rapidité. Le t-SNE convient à la visualisation de structures non linéaires.
