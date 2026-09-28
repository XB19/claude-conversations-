# DSC 324 — Chapitre 8 — Script de narration (Colossyan)

Total : 1047 mots, soit environ 7 à 8 minutes.

## Slide 1 (83 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre huit du cours DSC trois cent vingt-quatre, consacré aux techniques de clustering et à leur interprétation. Au chapitre précédent, nous avons posé les bases conceptuelles du regroupement. Nous passons maintenant aux méthodes concrètes, avec les deux techniques les plus utilisées, K-means et le clustering hiérarchique. Nous verrons aussi comment choisir le nombre de groupes, comment comparer plusieurs résultats, et surtout comment juger si un regroupement est réellement utile pour le problème posé.

## Slide 2 (82 mots)

Voici les objectifs pédagogiques de ce chapitre. Premièrement, mettre en oeuvre les principales techniques de clustering. Deuxièmement, comparer différents résultats de regroupement, obtenus avec des méthodes ou des paramètres différents. Troisièmement, choisir le nombre de clusters le plus pertinent, à l'aide de critères reconnus. Et quatrièmement, apprécier la pertinence d'un regroupement au regard du problème étudié. Car un bon clustering n'est pas seulement un clustering statistiquement optimal, c'est surtout un clustering utile et interprétable. Commençons par la méthode la plus célèbre, K-means.

## Slide 3 (81 mots)

Commençons par K-means, la méthode de partition la plus connue. Elle répartit les observations en K groupes, en minimisant l'inertie intra-cluster. Qu'est-ce que l'inertie intra-cluster ? C'est la somme des distances au carré entre chaque observation et le centre de son groupe, que l'on appelle centroïde. Plus cette inertie est faible, plus les groupes sont compacts, c'est-à-dire plus les observations d'un même groupe sont proches les unes des autres. L'objectif de K-means est donc d'obtenir des groupes aussi compacts que possible.

## Slide 4 (86 mots)

Formellement, l'inertie intra-cluster est la somme, sur tous les clusters k et toutes les observations x du cluster, de la distance au carré entre x et le centroïde mu k. L'algorithme procède par itérations. On initialise K centroïdes. On affecte chaque observation au centroïde le plus proche. On recalcule chaque centroïde comme la moyenne de ses observations. Et l'on répète jusqu'à convergence. K-means est rapide et efficace, mais suppose des clusters à peu près sphériques et de tailles comparables, et impose de fixer K à l'avance.

## Slide 5 (85 mots)

Voyons le clustering hiérarchique agglomératif. Il part de chaque observation comme un cluster individuel, puis fusionne successivement les deux clusters les plus proches. Cette proximité dépend du critère d'agrégation. La liaison simple utilise la distance minimale entre les points des deux clusters. La liaison complète, la distance maximale. La liaison moyenne, la distance moyenne. Et le critère de Ward minimise l'augmentation d'inertie intra-cluster à chaque fusion, il est souvent recommandé en pratique. Le résultat est un dendrogramme, dont la coupe détermine le nombre de clusters.

## Slide 6 (91 mots)

Comment choisir le nombre de clusters ? Trois outils. La méthode du coude représente l'inertie intra-cluster en fonction de K, et repère le point d'inflexion, au-delà duquel ajouter des clusters n'apporte plus de gain significatif. Le score de silhouette mesure, pour chaque observation, sa cohésion avec son propre cluster, comparée à sa séparation avec le cluster voisin. On retient le K qui maximise le score moyen. Enfin, pour le clustering hiérarchique, on lit le dendrogramme, et l'on coupe là où le saut de hauteur entre deux fusions est le plus grand.

## Slide 7 (97 mots)

Précisons le score de silhouette. Pour une observation i, il est égal à b de i moins a de i, divisé par le maximum de ces deux valeurs. A de i est la distance moyenne entre i et les autres observations de son cluster, c'est la cohésion. B de i est la distance moyenne entre i et les observations du cluster voisin le plus proche, c'est la séparation. Un score proche de un indique une observation bien classée. Un score proche de zéro, ou négatif, indique une observation mal classée, ou à la frontière entre deux clusters.

## Slide 8 (86 mots)

Comment comparer plusieurs résultats de clustering, obtenus avec des algorithmes différents, ou avec des valeurs différentes de K ? Il faut combiner deux types de critères. D'une part, des critères internes, comme le score de silhouette ou l'inertie, qui n'utilisent que les données. D'autre part, une évaluation qualitative de la cohérence et de l'utilité des profils obtenus, au regard du problème métier posé. Retenez ce principe. Un clustering statistiquement optimal, mais dont les groupes ne peuvent être interprétés ou exploités, n'a guère de valeur en pratique.

## Slide 9 (87 mots)

Pour interpréter un clustering, on reprend la logique du chapitre sept. On compare les caractéristiques moyennes de chaque groupe à la moyenne générale de l'échantillon. Mais on examine aussi la taille relative de chaque cluster. Des clusters extrêmement déséquilibrés, par exemple un groupe minuscule et un groupe énorme, peuvent signaler un problème de méthode ou de données. Enfin, on confronte les profils obtenus à la connaissance du domaine, pour juger de leur pertinence opérationnelle. Un bon segment doit pouvoir être compris et utilisé par les équipes métier.

## Slide 10 (85 mots)

Voici un point de vigilance essentiel. Un clustering n'est jamais une vérité absolue. Deux algorithmes différents, ou deux valeurs différentes de K, peuvent produire des regroupements sensiblement différents, et pourtant tout aussi défendables sur le plan statistique. Il n'existe pas, en général, un seul bon découpage des données. Le choix final doit donc toujours être guidé par l'utilité et l'interprétabilité des groupes pour le problème posé. Soyez transparents sur ce choix dans vos rapports, et justifiez-le par des arguments à la fois statistiques et métier.

## Slide 11 (84 mots)

Retenons les points clés. K-means minimise l'inertie intra-cluster, mais impose de fixer K à l'avance, et suppose des clusters de forme sphérique. Le clustering hiérarchique construit un dendrogramme, dont la coupe détermine le nombre de clusters, sans fixer K a priori. La méthode du coude et le score de silhouette sont les outils les plus utilisés pour choisir le nombre de clusters. Enfin, un clustering doit être évalué à la fois par des critères statistiques internes, et par la pertinence opérationnelle des profils obtenus.

## Slide 12 (100 mots)

Voici les corrigés. Un, le coude suggère quatre groupes et la silhouette trois. On compare alors les deux solutions sur leur interprétabilité et leur utilité métier, avant de trancher. Deux, la liaison simple fusionne selon les points les plus proches, elle suit des formes allongées, mais crée des effets de chaîne. Ward minimise l'inertie, et produit des groupes compacts et équilibrés, préférables pour une segmentation de clientèle. Trois, des groupes de deux et de soixante-dix-huit pour cent sont très déséquilibrés. Le petit groupe contient peut-être des valeurs aberrantes. Il faut les vérifier, tester un autre K ou une autre méthode.
