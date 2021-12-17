---
title: 4.0.LimiteSuiteApplication
created: '2021-12-06T07:11:15.733Z'
modified: '2021-12-09T15:20:44.719Z'
---

# Limite de Suites Applications

[[@toc]]

## I) Notions utiles

### 1) A partir d'un certain rang

#### a) Exemple:

$(u_n)$ définie par: pour $n \in \mathbb{N}$, $u_n = u_n = n^2 - 10n +1$.

étudier le sens de variation de cette suite.
On pose $f(x) = x^2 - 10x + 1$. On a $u_n = f(n)$.

Puis $f'(x) = 2x - 10$.

```
x     | -oo          5             +oo   |
-----------------------------------------|
f'(x) |         -    |    +              | a = 2, a > 0
f(x)  | décroissan  -24    croissante    |
```

$f(5) = 5^2 - 10*5 + 1 = 25 - 50 + 1 = -24$.

f est strictement croissante sur $[5, +\infty[$.

Donc on dira que $u_n$ est strictement croissante à partir de $n_0 = 5$.

En effet: Soit $n \in \mathbb{N}$, tel que: $5 \leq n$

$5 \leq n < n+1 \Rightarrow f(n) < f(n+1)$. car f est strictement croissante sur $[5, +\infty[$.

Bilan: $5 \leq n$, on a $u_n < u_{n+1}$.

#### b) définition:

"à partit d'un certain rang" signifie: qu'il exsiste un entier naturel n~0~ tel que: pour tout $n \in \mathbb{N}$, $n \geq n_0$

### 2) Notion de voisinages.

#### a) Exemple:

$]-r;r[, 0<r$ est un voisinage de 0.

```
          -r    0     r
----------]-----|-----[----------

          0     1     2
----------]-----|-----[----------

         1-r    1    1+r
----------]-----|-----[----------
```
$]1-r; 1+r[, 0<r$ est un voisinage de 1.

$l \in \R,$ l'intervalle ouvert centré en l, $]l-r; l+r[$ est appelé voisinage de l.


```
         l-r    l    l+r
----------]-----|-----[----------
            -r    +r
```

## II) Suites Convergentes: notion de limite

### 1) définition:

Soit $u_n$ une suite de nombres réels et $l \in \R$

**défintion "intuitive":**
 la suite $u_n$ est converge vers $l$ $\iff$ pour tout voisinage de l, les termes de la suite $u_n$ est contenus dans ce voisinage. à partir d'un certain rang.

```
         l-r    l    l+r
----------]-----|-----[----------
        u_{n_0+1}  u_n_0            
```


définition:
 la suite $u_n$ est converge vers $l$ $\iff$ Pour tout $r > 0$, [il existe $n_0 \in \N$, pour  $n \in \N$, $n  \geq u_0 ], u_n \in ]l-r; l+r[$.

remarque:
Comment tradiire u_n \in ]l-r; l+r[?

```
               u_n        
----------]-----|-----[----------
         e-r    e    e+r            
```

$\iff l-r < u_n l+r$
$\iff -r < u_n-l < r$
$\iff     |u_n-l| < r$

On dit alors que la suite $u_n$ est convergente et sa limite est $l$.

Notation:

$\lim\limits_{n -> +\infty}(u_n) = lim(u_n) = l$.

### 2) Propriété:
l'unicité de la limite pour une suite.

### 3) Quelques limites de référence:

- $k \in \R$: $(u_n)$ telle que: pour tout $n \in \N$, $u_n = k$.
on a $\Big[\lim\limits_{n -> +\infty}(u_n) = \lim\limits_{n -> +\infty}(k) = k$.

- pour $n \in \N$, $u_n = \frac 1 n$.
on a $\Big[\lim\limits_{n -> +\infty}(u_n) = \lim\limits_{n -> +\infty}(\frac 1 n) = 0$.

- Soit $q \in \R$, tel que: $0 < q < 1$, pour n \in \N, $u_n = q^n$.
on a $\Big[\lim\limits_{n -> +\infty}(u_n) = \lim\limits_{n -> +\infty}(q^n) = 0$.

### 4) Théorème de la convergence: Monotone:

|(1) toutes suite croissantes majorée est convergente.
|---
|**(2) toutes suite décroissante minorée est convergente.**

Remarque: ce théorème ne détermine pas la limite de la suite.

### 5) Théorème des gendarmes ou d'encadrement:


- Soit $(u_n), (v_n), (w_n)$ des suites telles que:
.
(1) pout tout $n \in \N$, $v_n \leq u_n \leq w_n$.
(2) $\lim\limits_{n -> +\infty}(v_n) = \lim\limits_{n -> +\infty}(w_n) = l, l\in \R$
.
On a alors: $\lim\limits_{n -> +\infty}(u_n) = l$.

Remarque: on peut remplacer (1) par:
A partir d'un certain rang, $v_n \leq u_n \leq w_n$ en conservant (2).
On a la même conclusion.

Application: Soit $p \in \N$, tel que $p > 2$ et $n \in \N^*$

(1) On a $n \leq n^p$ (en effet $n^p - n = n(n^{p-1}-1)$ et $n( n^{p-1}-1) \geq 0$)

on deduit que: $\frac 1 n \geq \frac 1 {n^p}$

(2) On applique le théorème des gendarmes.

(a) pour $n \in \N$, $0 \leq \frac 1 {n^p} \leq \frac 1 n$.
(b) $\lim\limits_{n -> +\infty}(0) = \lim\limits_{n -> +\infty}(\frac 1 n) = 0$.

On dédudit que: $\lim\limits_{n -> +\infty}(\frac 1 {n^p}) = 0$.

exemple: $\lim\limits_{n -> +\infty}(\frac 1 {n^2}) = 0,  \lim\limits_{n -> +\infty}(\frac 1 {n^3}) = 0, \dots$

### 6) opérations sur les suites convergentes:

#### a) Résultat:

Soit $u_n$ et $v_n$ telles que:

$\lim$\limits_{n -> +\infty}(u_n) = l,  \lim\limits_{n -> +\infty}(v_n) = l'$.
$l et l' étant 2 nombres réels.$

Soit $a \in \R$ et $b \in \R$

* $\lim\limits_{n -> +\infty}(u_n + v_n) = l + l'$
* $\lim\limits_{n -> +\infty}(u_n - v_n) = l - l'$
* $\lim\limits_{n -> +\infty}(u_n * v_n) = l * l'$
* $\lim\limits_{n -> +\infty}(\cfrac {u_n} {v_n}) = \cfrac l {l'}$, lorsque $l' \neq 0$.
* $\lim\limits_{n -> +\infty}(a u_n + b v_n) = al + bl'$

#### b) Exemples:

N°1: $u_n = \frac 3 {n^2} - \frac 5 {n} + 10$ , pour $n \in \N^*$.

$3*0 - 5*0 + 10 = 10$ "au brouillon"

Rédaction:

$\lim\limits_{n -> +\infty}(1/n^2) = \lim\limits_{n -> +\infty}(\frac 1 {n^2}) = \lim\limits_{n -> +\infty}(\frac 1 n) = 0$ et $\lim\limits_{n -> +\infty}(10) = 10$


Donc par somme et différence, on obtient:

$\lim\limits_{n -> +\infty}(u_n) = 3 \times 0 - 5 \times 0 + 10 = 10$ : (u_n) est convergente et $\lim\limits_{n -> +\infty}(u_n) = 10$

N°2: $u_n = -1400 \times 0,85^n + 2000$

On a 0 < 0.85 < 1, donc $\lim\limits_{n -> +\infty}(u_n) = 0$
puis $\lim\limits_{n -> +\infty}(u_n) = -1400 \times 0.85^n + 2000$

$\lim\limits_{n -> +\infty}(u_n) = 2000$

N°3: $u_n = \cfrac{3-\cfrac 1 n}{\cfrac 7 n + 5}$

et $\lim\limits_{n -> +\infty}(3-\cfrac 1 n) = 3 - 0 = 3$
et $\lim\limits_{n -> +\infty}(\cfrac7 n + 5) = 7*0 + 5 = 5$

Puis on obtient: $\lim\limits_{n -> +\infty}(u_n) = \cfrac 3 5$

N°4: $u_n = \cfrac{2 \times 0,5^n - 3}{1+5 \times 0,95^n}$


$\lim\limits_{n -> +\infty}(2 \times 0,5^n - 3) = 2 \times 0 - 3$ car 0 < 0.5 < 1 et $\lim\limits_{n -> +\infty}(0,5^n) = 0$

$\lim\limits_{n -> +\infty}(1+5 \times 0,95^n) = 1 + 5 \times 0 * 1$ car 0 < 0.95 < 1 et $\lim\limits_{n -> +\infty}(5 \times 0,95^n) = 0$

Donc on obtient: $\lim\limits_{n -> +\infty}(u_n) = -\cfrac 3 1 = -3$

### 7) comparaison de limites:

Résultat:

Soit $u_n$ et $v_n$ telles que: $\lim\limits_{n -> +\infty}(u_n) = l$,  $\lim\limits_{n -> +\infty}(v_n) = l'$.

à partir d'un certain rang, $u_n \leq v_n$

On a alors: $l \leq l'$

### 8) Application:

Soit $u_n$ définie par $x = \begin{cases} u_0 = 6 \\ \forall n \in \N, u_{n+1} = 0,2u_n - 3\end{cases}$

1) Démontrer que $u_n$ est décroissante.
2) Démontrer que $u_n$ est minorée par -4.
3)
a) Que peut on dire alors de la suite $u_n$ ?
b) En utilisant la relation de récurrence, indiquer la valeur de la limite de $u_n$

1) On utilise le raisonement par récurence:
Soit $n \in \N$, $P(n) = "u_n  \geq u_{n+1}$

* Initialisation: 
$u_1 = 0,2 * 6 - 3 = 1,2 -3 =-1,8, u_1 = 1,8$, On a $u_0 \geq u_1$

* Hérédité: Soit n \in \N,
HR: $u_n \geq u_{n+1}$, CCL: $u_{n+1} \geq u_{n+2}$

Preuve: 
$u_n \geq u_{n+1} \Rightarrow 0,2 * u_n \geq 0,2* u_{n+1} \Rightarrow 0,2 * u_n -3 \geq 0,2 * u_{n+1}-3 \Rightarrow u_{n+1} \geq u_{n+2}$

Initialisation et Hérédité indiquent que u_n est décroissante.

2) On utilise le raisonement par récurence:
Soit $n \in \N$, $P(n) = "-4 \leq u_n"$

Initialisation: car u_0=6
Hérédité: Soit n \in \N,

$-4 \leq u_n$
$\Rightarrow -4*0,2 \leq 0,2 * u_n$
$\Rightarrow -0,8 - 3 \leq 0,2 * u_n -3$
$\Rightarrow -3,8 \leq u_{n+1}$
$\Rightarrow -4 \leq u_{n+1}-3$

Selon le principe de la récurence, -4 est le minorant de u_n.

3a) La suite $u_n$ est décroissante, et minorée par -4.

D'apres le thépreme de la convergence, m montre elle est convergente

b) On note $l = \lim\limits_{n -> +\infty}(u_n)$

On a par opération 
$\lim\limits_{n -> +\infty}(0,2u_n-3) = 0,2l-3$

et $\lim\limits_{n -> +\infty}(u_{n+1}) = l$

Puis de u_n+1 = 0,2u_n -3

l = 0,2l-3 \Leftrightarrow 0,8l = -3 \Leftrightarrow l = -3,75

Bilan: $\lim\limits_{n -> +\infty}(u_n) = -3,75$





**Applications : Cours**

ABCD est un tétraèdre.
$\overrightarrow{AR} = \cfrac 4 5 \overrightarrow{AC}; \overrightarrow{AS} = \cfrac 2 3\vec{AD}; \vec{BT} = \cfrac 1 3 \overrightarrow{BD}$
### 1) Construtction
[Fig 1]

### 2) Étudier l'intersection des 2 plans $(BCD)$ et $(RST)$.
a) on peut dire les plans $(BCD)$ et $(RST)$ sont différents, en effet $S ∉ (BCD)$ puisque $S ∈ [AD]$

b) Justifier que $T ∈ (BCD) ∩ (RST)$.
* $T ∈ (BCD)$ car $T ∈ (BD)$ et $T ∈ (RST)$

c) On déduit que $(BCD) ∩ (RST)$ est une doite, passant par $T$.

d) Il faut construire un 2^e^ point de cette droite.
Comment ?
**Les droites $(ST)$ et $(AB)$ sont coplanaires: contenues dans le plan $(ABD)$.**
Or les droites $(ST)$ et $(AB)$ sont sécantes car $\overrightarrow{AS} = \cfrac 2 3 \overrightarrow{AD}$ et $\overrightarrow{BT} = \cfrac 1 3 \overrightarrow{BD}$ avec $\cfrac 1 3 ≠ \cfrac 2 3$

On note $K$ le pont d'intersection des droites $(AB)$ et $(ST)$.
Puis on note $L$ le point d'intersection des droites $(BC)$ et $(KR)$.

- En effet $L ∈ (BC)$ donc $L ∈ (BCD)$
- Puis $L ∈ (KR)$

En effet $K ∈ (ST)$ donc $K ∈ (RST)$
puis $R ∈ (RST)$ et $R ∈ (RST)$
donc $(KR) \subset (RST)$
donc $L ∈ (RST)$

**BILAN: $\boxed{(BCD) ∩ (RST) = (TL)}$**

#### $\boxed{\text{N°1}:}$

$ABCDEFGH$ est un parallépipère rectangle (pavé droit).
$I ∈ [AE]$ et $J ∈ [HD]$.
Comme indiqué sur la figure ci-dessous.

[Fig 2]

**Question**: Déterminer l'intersection des plants $(IJK)$ et $(DCG)$.
1. Dire pourquoi $J ∈ (DCG)$
2. Déduire que $J ∈ (IJP) ∩ (ABF)$
3. Déduire $(IJF) ∩ (ABF)$
4. a) Que dire des plans $(ABF)$ et $(DCG)$?
   b) Conclure sur $(IJF) ∩ (DCG)$ par application d'une propriété.

**(1)** $H ∈ (DCG)$ **donc** $(HD) \subset (DCG)$
**donc** $J ∈ (DCG)$

**(2)** $J ∈ (IJF)$ et d'après (1) $J ∈ (DCG)$
**donc** $J ∈ (IJF) ∩ (DCG)$

**(3)** $(IJF) ∩ (ABF) = (IF)$

**(4)**  a) Les plans $(ABF)$ et $(DCG)$ sont parallèles
**CAR** Les deux droites sécantes $(AB)$ et $(BF)$ du plan $(ABF)$ sont respectivement parallèles aux deux droites sécantes $(DC)$ et $(CG)$ du plan $(DCG)$.

b) Par propriété: si deux plants sont parallèles, tout plant qui coupe l'un, coupe l'autre et donc 2 droites d'interesection sont parallèles.
On déduire que la droite d'intersection de $(IJF)$ et $(DCG)$ est parallèle à $(d)$.
De plus cette droite passe par le point J.

**Bilan:** $(IJF) ∩ (DCG) = (Δ),$
$J ∈ (Δ)$ et $(Δ) \parallel (d)$



## III) Limites infinies
### 1) Définitions
#### a) Voisinnages
* Un voisinnage de $+\infty$ est un intervalle du type: $]A; +∞[, 0<A$
* Un voisinnage de $-\infty$ est un intervalle du type: $]-∞; B[, B<0$

#### b) Limites infinies
$(u_n)$ est une suite de nombres réels
- $\lim\limits_{n → +∞}u_n = \boxed{+∞}$

"intuitive": tout voisinnage de $+\infty$, contient tous les termes de la suite à partir d'un certain rang.

**mathématique**: $\forall A ∈ ℝ, 0<A$, il existe $n_0 ∈ ℕ$ tel que pour $n ∈ ℕ$, tel que $n_0 ≤ n$, on a $u_n ∈ ]A; +∞[$.
→ $\lim\limits_{n → +∞}u_n = \boxed{-∞}$

"intuitive": tout voisinnage de $-\infty$, contient tous les termes de la suite à partir d'un certain rang.

**mathématique**: $\forall B ∈ ℝ, B < 0$, il existe $n_0 ∈ ℕ$ tel que pour $n ∈ ℕ$, tel que $n_0 ≤ n$, on a $u_n ∈ ]-∞; B[$.

*Remarque:* l'entier $n_0$ dépend du choix de $A$ ou de $B$.

#### c) exemples: Soit $u_n$ telle que:
pour $n ∈ ℕ, u_n = an + b, a ≠ 0$

- pour $a > 0: \lim u_n = +∞$
- pour $a < 0: \lim u_n = -∞$

**Preuves:** fiche d'exercices

### 2) Théorème de comparaison.
#### a) énoncés

----------
> Soit $(u_n), (v_n)$ deux suites telles que:
> - **(1)** $\forall n ∈ ℕ, u_n ≤ v_n$.
>
> On a:
> - **(2)** si $\lim u_n = +∞$ alors $\lim v_n = +∞$
> - **(3)** si $\lim u_n = -∞$ alors $\lim v_n = -∞$
--------

**PREUVES:** en exercices


#### b) exemples
**N°1** Soit $p ∈ ℕ, 2 ≤ p$, on a $∀n ∈ ℕ, n ≤ n^p$
**on a** $\boxed{\lim n = +∞}$, d'après le théorème de comparaison précédent; enoncé (2)
on déduit que $\boxed{\lim n^p = + ∞}$

**N°2**: $q ∈ ℝ,$ tel que $1 < q$ et $u_n = q^n$
on a $\boxed{\lim (q^n) = + ∞}$

on a démontré: cf chapitre 1
pour $a > 0$, $∀ n ∈ ℕ, (1+a)^n ≥ 1 + na$
on utilise $q = 1 + \underbrace{(q-1)}_{a}$

D'après le l'inégalité précédente: $\forall n ∈ ℕ, \big(1+(q-1)\big)^n ≤ 1+n(q-1)$
**donc:** $\boxed{q^n ≥ 1 + n(q-1)}$

De plus $0 < q-1,$ on a $\lim \big( 1+n(q-1)\big) = + ∞$
Pr théorème de comparaison $\boxed{\lim q^n = + ∞ }$

> $\lim 4^n = + ∞ , 1<q$
> $\lim 0.5^n = + ∞ , 0<q<1$

### 3) Propriétés:

---
> - Soit $(u_n)$ une suite croissante qui n'est pas majorée.
ON A $\lim u_n = + ∞$
> - Soit $(u_n)$ une suite décroissante qui n'est pas minorée.
ON A $\lim u_n = - ∞$
---

Preuves: exercices

### 4) BILAN
$(u_n)$ de terme général.

$\sqrt n, n, n^2, n^3, \cdots, q^n, 1<q$

toutes ces suites ont pour limite $+\infty$


# Chap 4꞉ LIMITES de SUITES꞉ APPLICATIONS (PARTIE 4)
## IV) LES OPÉRATIONS SUR LES LIMITES
### 1) Les différents tableaux:
#### a) Sommes et produits
**TABLEAU N°1**
||||||||
|-|-|-|-|-|-|-|
|$\lim u_n = ...$|$l$|$l$|$l$|$+ ∞$|$- ∞$|$+ ∞$|
|$\lim v_n = ...$|$l'$|$+\infty$|$-\infty$|$+\infty$|$-\infty$|$-\infty$
|$\lim (u_n + v_n) = ...$|$l+l'$|$+\infty$|$-\infty$|$+\infty$|$-\infty$|$\color{red}\text{F.I.}$

*F.I. signifie "forme indéterminée".*

**exemple 1)** $u_n = 2n$ et $v_n = -n$: on a $\lim u_n = + ∞$ et $\lim v_n = - ∞$
on calcule $u_n + v_n = n$ et $\lim (u_n + v_n) = \lim n = +\infty$

**2)** $u_n = 2n$ et $v_n = -4n$ on a $\lim u_n = +∞$ et $\lim v_n = -∞$
on calcule $u_n + v_n = -2n$ et $\lim(u_n + v_n) = \lim(-2n) = -∞$


|||||||
|-|-|-|-|-|-|
|$\lim u_n = ...$|$0<l ou +\oo$|$l<0 ou -\oo$|$0<l ou +\oo$|$l<0 ou -\oo$|$0$
|$\lim v_n = ...$|$0^+$|$0^+$|$0^-$|$0^-$|$0$
|$\lim (\frac{u_n} {v_n}) = ...$|$+\oo$|$-\infty$|$-\infty$|$+\infty$|$\color{red}\text{F.I.}$



4 cas de formes indéterminée:

$+\oo + -\oo$

$0\times+\oo$

$\f {+\oo} {+\oo}$

$\f 0 0$

### 2) Exempkles

#### a) 


$u_n = 6n^2+n / 2n^3 + 3n^2 + 5$    étude de lim $u_n$

$lim(6n^2+n) = +\oo$    car $lim(6n^2) = lim(n) = +\oo$ par somme


et 

$lim(2n^3 + 3n^2 + 5) = +\oo$ par somme

C'est une forme inderterminée du type $"+\oo/+\oo"$ par quotient

On écrit autrement un

$$
u_n = \f{n^2(6n^2/n^2 + n/n^2)}{n^3 (2n^3/n^3 + 3n^2/n^3 + 5/n^3)} \\
u_n = \f{n^2(6 + 1/n)}{n^3 (2 + 3/n + 5/n^3)}\\
u_n = \f{n^2}{n^3} \f{6+1/n}{2 + 3/n + 5/n^3} = 1/n \times \f{6+1/n}{2+3/n+5/n^3}\\
$$
$lim(1/n) et lim(\f{6+1/n}{2+3/n+5/n^3}) = 6/2 = 3$ par quotient

par produit: $lim(u_n) = 0 \times 3 = 0$

On peut dire que (u_n) est convergente vers 0

Remarque: on peut aussi apliquer en cas d'oublis $lim u_n = lim \f{6n^2}{2n^3} = lim{3}{n} = 0$

Méthode: lorsque $u_n = \f{P(n)}{Q(n)}$ ou P et Q sont 2 polynomes on factorise P(n) et Q(n) pour le terme de plus haut degré

N°3: $u_n = 0,8^n(3+(-1)^n)$

Analyse: Porduit

$lim 0,8^n = 0$
$lim 3+(-1)^n =$ Pas de limite car -1^n = -1 quand n est impair ou 1 quand n est pair

pour $n \in \mathbb{N}$

$-1 \leq (-1)^n \leq 1$
$\longrightarrow 2 \leq 3+(-1)^n \leq 4$
$\longrightarrow 2 \times 0,8^n \leq u_n \leq 4\times0,8^n$    car 0< 0,8^n

Peut on calculer mim u_n?

$lim(2\times0,8^n) = 2\times0 = 0$ et lim(4\times0,8^n) = 4\times0 = 0$

Par théorème d'encadrement, on a $\lim(u_n) = 0$

N°5: 

$$\begin{cases}
u(0) = 0,4\\
pour~n \in \mathbb{N}, u_{n+1} = u_n-u_n^2\\
\end{cases}$$

Rapel: send de varation de $(u_n): u_{n+1} - u_n = u_n - u_n^2 - u_n = -u_n^2$ or $-u_n^2 \leq 0$

ainsi: $u_{n+1} - u_n \leq 0$ Donc (u_n) est décroissante.
 
- $\forall n \in \N, 0 \leq u_n \leq \f 1 2$

on pose $f(x) = x - x^2$

on donne le tableau de varation de $f$ sur $[0,\f 1 2]$

- $f'(x) = 1 - 2x$
- Dédution: $\forall x \in [0,\f 1 2], 0 \leq f'(x) \leq \f 1 4$

```tableau
x    | 0                1/2
---------------------------
f'(x)|          +        0  |  a=-2
f(x) |0         ↗       1/4
```


Ayant introduit f: u_{n+1} = f(u_n)

On utilise le raisonement par récurrence pour prouver:

$\forall n\in  \N, P(n) = "0 \leq u_0 \leq \f 1 2"$

Hérédité: Soit n \in \N
HR: $0 \leq u_n \leq \f 1 2$
CCL: $0 \leq u_{n+1} \leq \f 1 2$

Preuve:

$0 \leq u_0 \leq \f 1 2 \Rightarrow f(0) \leq f(u_n) \leq f(\f 1 2)$
$\Rightarrow 0 \leq u_{n+1} \leq 1/4 \leq 1/2$

1) est déroissante et minorée par 0, elle est donc convergente par le théorème de la convergence monotone

on note $lim u_n = l$

2) Calculez $l$

On utilise la relation de recurrence:
$u_{n+1} = u_n - u_n^2$

$lim(u_n - u_n^2) = ?$

$lim(u_n^2) = lim(u_n \times u_n) = l \times l = l^2$ par produit
puis lim(u_n - u_n^2) = l-l^2$ par difference

lim(un+1) = lim(un) = l 

lim(un+1) = lim(un-u_n^2), par passage à limite sur la relation de récurence donc l=l-l^2 \Leftrightarrow 0 = -l^2 \Leftrightarrow 0 = l

Bilan: (u_n) est convergente vers 0


$$\begin{cases}
b(0) = 1\\
pour~n \in \mathbb{N}, b_{n+1} = \frac 1 3 b_n + n-2
\end{cases}$$





