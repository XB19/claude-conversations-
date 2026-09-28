# DSC 423 — Chapitre 5 — Script de narration (Colossyan)

Total : 2103 mots, soit environ 14 à 16 minutes.

## Slide 1 (84 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre cinq du cours DSC quatre cent vingt-trois, consacré à l'analyse des résidus. Ce chapitre fait partie de la deuxième partie du cours, sur les semaines quatre et cinq. Un modèle de régression n'est fiable que si ses hypothèses sont respectées. Or, c'est précisément l'analyse des résidus qui permet de le vérifier. Nous verrons les principes, les graphiques de diagnostic, les tests statistiques, et les remèdes à appliquer lorsque quelque chose ne va pas.

## Slide 2 (87 mots)

Voici les objectifs de ce chapitre. Vous comprendrez le rôle des résidus dans le diagnostic des modèles. Vous connaîtrez leurs propriétés théoriques sous les hypothèses classiques. Vous saurez produire et interpréter les graphiques de diagnostic, résidus contre valeurs ajustées, Q-Q plot, échelle-localisation, et résidus contre levier. Vous utiliserez les tests de Breusch-Pagan, Shapiro-Wilk et Durbin-Watson. Vous détecterez les points aberrants et influents. Et vous proposerez des stratégies de remédiation, appliquées avec un logiciel statistique. Ce chapitre est très pratique, alors ayez votre logiciel à portée de main.

## Slide 3 (87 mots)

Qu'est-ce qu'un résidu ? C'est la différence entre la valeur observée et la valeur prédite par le modèle, pour une observation donnée. On le note e i, égal à Y i moins Y i chapeau. Y i est la valeur observée de la variable dépendante, et Y i chapeau la valeur prédite. Les résidus jouent un rôle central, car ce sont les estimations des erreurs epsilon du modèle, que l'on ne peut jamais observer directement. Ils sont donc au coeur de tout diagnostic d'un modèle de régression.

## Slide 4 (86 mots)

Sous les hypothèses classiques, les résidus des moindres carrés ont cinq propriétés. Leur somme est nulle, si le modèle contient une ordonnée à l'origine. Leur moyenne est donc nulle aussi. Ils ne sont pas corrélés avec les valeurs ajustées. Ils ne sont pas corrélés non plus avec chacune des variables explicatives. Enfin, la variance résiduelle s'estime par la somme des carrés des résidus, divisée par n moins k moins un. On l'appelle aussi le carré moyen des erreurs. Ces propriétés découlent directement de la méthode d'estimation.

## Slide 5 (85 mots)

Pourquoi analyser les résidus ? Parce qu'ils permettent de vérifier chaque hypothèse du modèle. Pour la linéarité, les résidus ne doivent montrer aucune tendance systématique par rapport aux valeurs ajustées. Pour l'homoscédasticité, leur variance doit être constante. Pour la normalité, ils doivent suivre approximativement une loi normale. Pour l'indépendance, ils ne doivent pas être corrélés entre eux, surtout avec des données temporelles. Et enfin, ils ne doivent pas contenir de valeurs extrêmes, signe de points aberrants. Chaque hypothèse a donc son propre outil de vérification.

## Slide 6 (82 mots)

Les graphiques de diagnostic sont les outils principaux de l'analyse des résidus. Ils permettent de visualiser les éventuelles violations des hypothèses. Nous en étudierons quatre. Le graphique des résidus contre les valeurs ajustées, pour la linéarité et l'homoscédasticité. Le Q-Q plot, pour la normalité. Le graphique échelle-localisation, pour une vérification plus robuste de l'homoscédasticité. Et le graphique des résidus contre le levier, pour détecter les points influents. Ensemble, ils donnent un bilan complet de la santé du modèle. Voyons-les un par un.

## Slide 7 (84 mots)

Premier graphique, les résidus en fonction des valeurs ajustées. Il sert à vérifier la linéarité et l'homoscédasticité. Si les points sont répartis au hasard autour de zéro, sans aucune tendance, les deux hypothèses sont respectées. Si l'on observe une forme en U ou en cloche, c'est le signe d'une non-linéarité, le modèle ne capture pas correctement la relation. Et si la dispersion s'élargit ou se resserre, en forme d'éventail, cela indique une hétéroscédasticité. Quiz, un éventail qui s'ouvre vers la droite ? Une hétéroscédasticité.

## Slide 8 (83 mots)

Deuxième graphique, le Q-Q plot, pour quantile-quantile. Il compare les quantiles théoriques de la loi normale aux quantiles observés des résidus. Il sert à vérifier la normalité. Si les points sont alignés sur la diagonale, les résidus suivent approximativement une loi normale. Si les extrémités s'écartent vers l'extérieur, les queues sont plus épaisses, la distribution est dite leptokurtique. Si elles s'écartent vers l'intérieur, les queues sont plus fines, elle est platykurtique. Et si les points s'écartent d'un seul côté, la distribution est asymétrique.

## Slide 9 (85 mots)

Troisième graphique, l'échelle-localisation, ou scale-location. On y représente la racine carrée de la valeur absolue des résidus studentisés, en fonction des valeurs ajustées. Il permet de vérifier l'homoscédasticité de manière plus robuste que le premier graphique. Si l'on obtient une ligne à peu près horizontale, sans tendance, l'homoscédasticité est respectée. En revanche, une tendance croissante ou décroissante indique que la variance des erreurs change avec le niveau prédit, autrement dit une hétéroscédasticité. Ce graphique complète donc utilement le premier, en rendant les tendances plus visibles.

## Slide 10 (85 mots)

Quatrième graphique, les résidus contre le levier. On y représente les résidus studentisés en fonction du levier, avec souvent des courbes de niveau de la distance de Cook, par exemple à zéro virgule cinq et à un. Il sert à détecter les points influents. Un grand levier correspond à une observation aux valeurs extrêmes sur les variables explicatives. Un grand résidu studentisé correspond à une observation mal ajustée. Les points situés au-delà des courbes de Cook sont potentiellement influents, et doivent être examinés de près.

## Slide 11 (81 mots)

Les graphiques sont indispensables, mais leur lecture reste subjective. Les tests statistiques apportent une validation objective. Nous en verrons trois. Le test de Breusch-Pagan teste l'homoscédasticité, c'est-à-dire la constance de la variance des erreurs. Le test de Shapiro-Wilk teste la normalité des résidus. Et le test de Durbin-Watson teste l'indépendance des résidus, en particulier pour les données temporelles. La bonne pratique consiste à croiser systématiquement ce que disent les graphiques et ce que disent les tests. Voyons chacun de ces tests.

## Slide 12 (81 mots)

Le test de Breusch-Pagan porte sur l'hétéroscédasticité. L'hypothèse nulle est l'homoscédasticité, la variance est constante. L'hypothèse alternative est l'hétéroscédasticité. Son principe est simple. On régresse les carrés des résidus sur les variables explicatives. Si cette régression explique une part significative de leur variance, c'est que la dispersion dépend des X, et l'on rejette l'hypothèse nulle. Une p-value inférieure à zéro virgule zéro cinq signale donc une hétéroscédasticité. On envisage alors les moindres carrés pondérés ou une transformation. Retenez bien cette règle.

## Slide 13 (81 mots)

Le test de Shapiro-Wilk porte sur la normalité des résidus. L'hypothèse nulle dit que les résidus suivent une loi normale, l'hypothèse alternative dit le contraire. Une p-value inférieure à zéro virgule zéro cinq indique une déviation significative de la normalité. Mais attention, ce test est très sensible. Avec de grands échantillons, une déviation minime, sans conséquence pratique, peut devenir significative. Dans ce cas, fiez-vous plutôt au Q-Q plot, et rappelez-vous que le théorème central limite protège les conclusions en grand échantillon.

## Slide 14 (87 mots)

Le test de Durbin-Watson porte sur l'autocorrélation des résidus, surtout pour les données temporelles. L'hypothèse nulle est l'absence d'autocorrélation. La statistique est comprise entre zéro et quatre. Une valeur proche de deux signifie pas d'autocorrélation. Proche de zéro, une autocorrélation positive. Proche de quatre, une autocorrélation négative. Une p-value inférieure à zéro virgule zéro cinq signale une autocorrélation significative. Il faut alors adopter des modèles qui tiennent compte de la structure temporelle, comme ARIMA ou des variables retardées. Ce test est donc indispensable pour les séries chronologiques.

## Slide 15 (88 mots)

Certaines observations ont un effet disproportionné sur le modèle, il est essentiel de les repérer. On distingue trois notions. Un point aberrant a une valeur de Y extrême par rapport au modèle, on le détecte avec les résidus studentisés. Un point à fort levier est éloigné des autres sur les variables explicatives, son levier, noté h i i, est compris entre zéro et un. Enfin, un point influent modifie sensiblement les coefficients. On le mesure par la distance de Cook, qui combine le levier et le résidu studentisé.

## Slide 16 (85 mots)

Revenons sur les points aberrants. Un point aberrant est une observation dont la valeur de Y est extrême par rapport au modèle. On le détecte grâce au résidu studentisé, égal au résidu divisé par sigma chapeau fois la racine de un moins le levier. Cette correction tient compte du fait que les résidus n'ont pas tous la même variance. En règle générale, une valeur absolue supérieure à trois signale un point aberrant. Avec des échantillons plus grands, on peut aussi utiliser un seuil de deux.

## Slide 17 (89 mots)

Le levier mesure l'éloignement d'une observation par rapport aux autres, sur les variables explicatives. Il signale une valeur extrême de X. Il est noté h i i, et compris entre zéro et un. Règle empirique, un levier supérieur à deux fois k plus un, divisé par n, ou trois fois k plus un divisé par n selon les auteurs, est considéré comme élevé. Attention, un point à fort levier n'est pas forcément influent. Il ne le devient que s'il est aussi mal ajusté, c'est-à-dire s'il a un grand résidu.

## Slide 18 (84 mots)

La distance de Cook, notée D i, mesure l'effet de l'observation i sur l'ensemble des coefficients. Elle vaut le carré du résidu studentisé, divisé par k plus un, multiplié par le levier divisé par un moins le levier. Elle combine donc les deux dimensions, mauvais ajustement et position extrême. En dessous de zéro virgule cinq, l'influence est faible. Au-dessus de un, elle est élevée et doit être considérée sérieusement. On utilise parfois aussi le seuil de quatre divisé par n moins k moins un.

## Slide 19 (80 mots)

Que faire d'un point influent ? Quatre options s'offrent à vous. D'abord, vérifier les données, s'agit-il d'une erreur de saisie ou de mesure ? Ensuite, conserver l'observation, mais utiliser des méthodes robustes, comme la régression par M-estimateurs. Troisième option, transformer les variables pour réduire son influence. Enfin, supprimer l'observation si elle est manifestement erronée, mais avec prudence, et en justifiant toujours cette suppression dans votre rapport. On ne supprime jamais un point simplement parce qu'il dérange le modèle. Soyez transparents.

## Slide 20 (80 mots)

Voici les stratégies de remédiation selon le problème. Face à une non-linéarité, on ajoute des termes polynomiaux, on transforme les variables, par logarithme, racine carrée ou Box-Cox, ou l'on utilise des modèles non linéaires, comme les splines. Face à l'hétéroscédasticité, les moindres carrés pondérés, une transformation, ou des erreurs standards robustes de Huber-White. Face à la non-normalité, une transformation Box-Cox. Face à l'autocorrélation, des variables retardées, un modèle ARIMA ou une différenciation. Et face aux points influents, la régression robuste.

## Slide 21 (90 mots)

Passons à l'étude de cas, avec les données Boston Housing. On charge le package MASS et les données. On construit un modèle qui explique le prix médian par le taux de criminalité, le nombre de pièces, l'âge, le statut socio-économique et le ratio élèves par enseignant. Puis on affiche les quatre graphiques de diagnostic avec la fonction plot appliquée au modèle, en choisissant le graphique avec l'argument which. Le premier donne les résidus contre les valeurs ajustées, le deuxième le Q-Q plot, le troisième l'échelle-localisation, et le cinquième le levier.

## Slide 22 (82 mots)

On complète avec les tests statistiques. Le package lmtest fournit la fonction bptest, pour le test de Breusch-Pagan, et dwtest, pour le test de Durbin-Watson. Le test de Shapiro-Wilk s'obtient avec shapiro test, appliqué aux résidus du modèle. Pour détecter les points influents, la fonction influence measures donne un tableau complet des mesures d'influence, et cooks distance donne directement la distance de Cook de chaque observation. Avec ces quelques lignes, votre diagnostic est complet, graphique et statistique. Gardez ce code comme modèle.

## Slide 23 (83 mots)

Interprétons les résultats. Le graphique des résidus contre les valeurs ajustées montre une tendance en U, signe d'une possible non-linéarité. Une transformation du prix, logarithme ou Box-Cox, pourrait aider. Le Q-Q plot s'écarte de la diagonale dans les queues, les queues sont épaisses. Le graphique échelle-localisation montre une légère tendance croissante, qui suggère une hétéroscédasticité. Les tests confirment, Breusch-Pagan et Shapiro-Wilk ont des p-values inférieures à zéro virgule zéro cinq. Enfin, plusieurs observations ont une distance de Cook supérieure à zéro virgule cinq.

## Slide 24 (83 mots)

Quelles remédiations pour Boston Housing ? Premièrement, transformer la variable dépendante, avec le logarithme du prix ou Box-Cox, pour corriger la non-linéarité et l'hétéroscédasticité. Deuxièmement, ajouter des termes quadratiques, comme le carré du nombre de pièces ou du statut socio-économique. Troisièmement, utiliser les moindres carrés pondérés ou des erreurs standards robustes. Quatrièmement, envisager une régression robuste pour réduire l'influence des points extrêmes. Et enfin, comparer les modèles, avec et sans transformations, en vérifiant que les diagnostics s'améliorent réellement. Ce sera votre fil conducteur.

## Slide 25 (81 mots)

Résumons ce chapitre. Les résidus sont les différences entre valeurs observées et prédites, et leur analyse est essentielle pour valider les hypothèses. Les quatre graphiques de diagnostic sont vos outils principaux. Les tests de Breusch-Pagan, Shapiro-Wilk et Durbin-Watson apportent une validation objective. Les points aberrants et influents se repèrent avec les résidus studentisés, le levier et la distance de Cook. Et plusieurs remèdes existent, transformations, moindres carrés pondérés, régression robuste. Retenez-le, l'analyse des résidus est une étape obligatoire pour tout modèle.
