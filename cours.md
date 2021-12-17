---
title: 4.0.Matrices
created: '2021-12-06T22:10:47.890Z'
modified: '2021-12-08T12:30:37.166Z'
---

# 4.0.Matrices 

> Hello Je suis Arkan
> > Aj allo 


## I) Introduction

$$A = \left[\begin{array}{ccc}
  3 & 2 & \f 1 3 \\
  -5 & -\f 3 4 & \sqrt 2
\end{array}\right]$$

A est une matrice comportant 2 lignes et3 colonnes. plus généralement, une matrice est un tableau de nombres son <u>format</u> est définie par le couple $(n; p)$, ou $n$ est le nombre de lignes et $p$ le nombre de colonnes.

Par la **suite** on notera $M(n; p)$ l'ensemble des matrices de format $(n; p)$.

Quand $n=p$, on dit que la matrice est <u>carré d'ordre $n$</u>.. On note n $M(n)$ l'ensemble de ces matrices.

Une matrice n'ayant qu'une ligne s'appelle <u>matrice ligne</u>.
Une matrice n'ayant qu'une colonne s'appelle <u>matrice colonne</u>.

Les nombres qui figurent dans la matrice sont appelés <u>termes</u> de cette matrice.

Chaque terme peut être identifié par un couple $(i, j)$ où $i$ est l'indice de sa ligne et $j$ son indice de sa colonne.

Exemple : dans la matrice $A$ ce dessus, on a:

$a_{1~1} = 3$

(rigoureusement, vu qu'il y'a 2 dimensions et moins de 10 colonnes/rang, on peut écrire $a_{1,1}$ mais pas grave si pas ambiguïté)

$$
a_{1~1} = 3 ~~~
a_{1~2} = 2 ~~~
a_{1~3} = \f 1 3 \\~\\
a_{2~1} = -5 ~~~
a_{2~2} = -\f 3 4 ~~~
a_{2~3} = \sqrt 2
$$

## II) Règles de calcul

### 1) Somme de matrices

Pour pouvoir être additionnées, deux matrices doivent être de même format.

La matrice somme est alors du même format que les même précédentes.

Si on a $A=(a_{ij})$, $B=(b_{ij})$ et $C=(c_{ij})$ avec $i\in [[1,n]], j\in [[1,p]] (n \in \N^*, p \in \N^*)$
alors $C = A+B \Leftrightarrow \forall i \in [[1,n]], \forall j \in [[1,p]], c_{ij} = a_{ij}+b_{ij}$

Exemple :

$$
A = \begin{bmatrix}
  2 & 3 & 5 \\
  -1 & \cfrac 1 2 & 4
\end{bmatrix}, 
B = \begin{bmatrix}
  6 & 3 & -4 \\
  0 & -\cfrac 1 2 & 2
\end{bmatrix},
A+B = \begin{bmatrix}
  8 & 6 & 1 \\
  -1 & 0 & 6
\end{bmatrix}
$$

La <u>matrice nulle</u> est une matrice dont tous les termes sont nuls. On la note $0$, Ou $0_{np}$ en cas d'ambiguité.

Si on $A \in M(n; p)$, et $0=0_{np}$ alors $\boxed{A+0=A}$

L'adition est <u>commutative</u>.

$\forall A \in M(n; p), \forall B \in M(n; p)$ on a $\boxed{A+B=B+A}$

### 2) Produit de matrices par un réel

Si $A \in M(n; p)$, $A = (a_{ij})$ on définit la matrice $kA$ par $\boxed{(ka)_{ij} = ka_{ij}}$

Exemple :

Si 
$$A = \begin{bmatrix}
  3 & 2 \\
  -1 & 4
\end{bmatrix}$$
, alors 
$$-3A = \begin{bmatrix}
  -9 & -6 \\
  3 & -12
\end{bmatrix}$$

Si $k=1$, la matrice $-1 \cdot A$ est notée $-A$, appelée <u>matrice opposée</u> de opposée de 1.

On définit alors la différence de deux matrices $A$ et $B$  de même format par $\boxed{A-B=A+(-B)}$

De façon imédiate, on a $A-A=0$

### 3) Produit de deux matrices

Deux matrices $A$ et $B$ ne peuvent être multipliées entre elle que si $A$ \in M(m; n)$ et $B$ \in M(n; p)$.

Le produit $AB$ est donc de format $(m; p)$.

So on a $C=(c_{ij}) = AB$,  on a 
$\boxed{c_{ij} = \sum_{k=1}^m a_{ik}b_{kj}}$
si $A \in M(m; n)$ et $B \in M(n; p)$

Exemple :

On pose 
$$A = \begin{bmatrix}
  5 & 7 & 0\\
  -1 & 1 & 3 
\end{bmatrix}, B = \begin{bmatrix}
  4 & 0 \\
  -1 & 2 \\
  2 & 3
\end{bmatrix}$$

$A \in M(2; 3)$ et $B \in M(3; 2)$

Donc $AB$ est définie, son format sera $(2; 2)$.

$c_{11} = (a_{11}b_{11} + a_{12}b_{21} + a_{13}b_{31}) = 5 \times 4 + 7 \times -1 + 0 \times 2 = 13$
$c_{12} = (a_{11}b_{12} + a_{12}b_{22} + a_{13}b_{32}) = 5 \times 0 + 7 \times 2 + 0 \times 3 = 14$
$c_{21} = (a_{21}b_{11} + a_{22}b_{21} + a_{23}b_{31}) = -1 \times 4 + 1 \times -1 + 3 \times 2 = 1$
$c_{22} = (a_{21}b_{12} + a_{22}b_{22} + a_{23}b_{32}) = -1 \times 0 + 1 \times 2 + 3 \times 3 = 11$

Donc 
$$AB = \begin{bmatrix}
  13 & 14 \\
  1 & 11
\end{bmatrix}$$
Il est commode d'adopter une disposition particulière des matrices pour mener les calcules.

[1...]



## III) Matrices carrées

On note $M_n$ l'ensemble des matrices de format $(n; n)$.

Dans $M_n$, tous les produits sont possible, aussi bien à gauche que a droite.

Dans le cas général, $n$ n'a pas $AB=BA$ (A et B étant 2 matrices de $M_n$).

$\boxed{\text{La multiplication n'est pas commutative}}$

Quand l'égalité $AB=BA$ est vraie, on dit que les matrices <u>commutent</u>.

La matrice <u>unitée</u>, notée $I_n$ ou plus simplement $I$, en l'abcense d'ambiguité est défini par

$\boxed{I_{ij} = 1 ~ si~ i=j;}$
$\boxed{I_{ij} = 0 ~ si~ i\neq j}$

Exemple:

$$I_3 = \left[\begin{array}{ccc}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1
\end{array}\right]$$

$$I_4 = \begin{bmatrix}
  1 & 0 & 0 & 0 \\
  0 & 1 & 0 & 0 \\
  0 & 0 & 1 & 0 \\
  0 & 0 & 0 & 1
\end{bmatrix}$$

On a $\boxed{AI=IA=A}$ (Si $A \in M_n$ et $I \in M_n$).

$abcdefghijklmnopqrstuvwxyz$


# vim: set ft=tex:


