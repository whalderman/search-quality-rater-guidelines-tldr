---
title: 複数の解釈・意図があるクエリの評価
meta:
  - name: description
    content: クエリの意味が1つしかないクエリがあります。一方、複数の意味があるクエリもあります。複数の「クエリの解釈」が成立する場合、それぞれの解釈の蓋然性を考え、さらにその解釈に対して検索結果がどの程度役立つかを考えてNeeds Met評価をしてください。
---

# 複数の解釈・意図があるクエリの評価

クエリの意味が1つしかないクエリがあります。例えば、<span class="query">iphone</span>（英語・アメリカ）というクエリを考えてみましょう。ユーザーの意図は「iPhoneについて調べる」「iPhoneを買う」「Apple公式サイトのiPhoneのページに行く」等色々あるでしょうが、基本的に全てのユーザーが「Apple社のスマートフォン」を意味しています。

一方、複数の意味があるクエリもあります。例えば、<span class="query">apple</span>（英語・アメリカ）というクエリを考えてみましょう。「コンピューターのApple社」の情報を探すユーザーもいるし、「果物のapple」の情報を探す人もいます。このように異なる意味のことを「クエリの解釈」といいます。

複数の「クエリの解釈」が成立する場合、それぞれの解釈の蓋然性を考え、さらにその解釈に対して検索結果がどの程度役立つかを考えてNeeds Met評価をしてください。

- **支配的解釈**に対して大変役に立つ検索結果は、ユーザーの大半にとっても役に立つので**Highly Meets**評価にしましょう。最も優位性のある解釈のあるクエリの場合、**FullyM**評価が適用できることもあります。
- **一般的解釈**に対して大変役に立つ検索結果は、その解釈の蓋然性に応じて**Highly Meets**評価または**Moderately Meets**評価にしましょう。
- **極めて少数派の解釈**に対して大変役に立つ検索結果は、大半のユーザーには不要なので**Slightly Meets**以下の評価にしましょう。
- 「ほぼありえない解釈である」という理由で**FailsM**評価を付けることもあります。こうした解釈を「ありえない解釈」といいます。

## 「Website」と「訪れる」の意図が混在するクエリの評価

以下の意図が両方とも強いクエリがあります。

1. **Webサイトを訪問：**<!-- -->「情報を探す」「Webで買い物する」「予約する」「アポを入れる」「お客様窓口に連絡」などのオンラインで達成できることをする目的です。
2. **訪れる：**<!-- -->実際に店舗・会社などを訪問する目的です。

ユーザーが「上記のどちらかが目的」であることはわかりますが、「どちらが目的」なのかは判断できません。このようなクエリに対して、片方の意図だけを満たす検索結果は**Fully Meets**評価にできません。

<div class="examples">
<div class="example">

**クエリ：**<span class="query">target</span>  
**ユーザーの所在地：**<!-- -->フロリダ州ジャクソンビル  
**ユーザーの意図：**<!-- -->「近所のTarget店舗に行く」「TargetのWebサイトで買い物する・商品を調べる・価格を知るなど」のいずれか。

<div class="results">
<div class="result">

![](../images/img641.jpg)  
![needs met scale - highly meets+](../images/hm+.jpg)

RBにはジャクソンビルの3つのtargetが表示される。この情報は店を訪れるユーザーにとって特に役立つ。これはユーザーが近くのtargetを見つけるという意図を満たす。

</div>
<div class="result">

![](../images/img643.jpg)  
![needs met scale - highly meets+](../images/hm+.jpg)

オンラインで買い物をしたなどの理由でWebサイトを利用しようとしているユーザーの意図を満たしており、結果に非常に満足している。

</div>
</div>
</div>
<div class="example">

**クエリ：**<span class="query">dmv</span>  
**ユーザーの所在地：**<!-- -->カリフォルニア州ベルモント  
**ユーザーの意図：**<!-- -->「近所のDMVに行く」「DMVのWebサイトで免許更新手続きをする・手数料を支払う・情報を知るなど」のどちらか。

<div class="results">
<div class="result">

![](../images/img646.jpg)  
![needs met scale - highly meets+](../images/hm+.jpg)

RBには、近くの２つのDMVが表示される。この情報は店を訪れるユーザーにとって特に役立つ。これはユーザーが近くのDMVを見つけるという意図を満たす。

</div>
<div class="result">

![](../images/img648.jpg)  
![needs met scale - highly meets+](../images/hm+.jpg)

ユーザーが情報を見つけたり、Webサイトを使用したいという意図を満たしている。

</div>
</div>
</div>
<div class="example">

**クエリ：**<span class="query">citibank</span>  
**ユーザーの所在地：**<!-- -->カリフォルニア州パロアルト  
**ユーザーの意図：**<!-- -->「近所のシティバンク支店に行く」「シティバンクのWebサイトでオンライン取引をする」のどちらか。

<div class="results">
<div class="result">

![](../images/img650.jpg)  
![needs met scale - highly meets+](../images/hm+.jpg)

RBには、近くの２つのCitibankが表示される。この情報は店を訪れるユーザーにとって特に役立つ。これはユーザーが近くのCitibankを見つけるという意図を満たす。

</div>
<div class="result">

![](../images/img652.jpg)  
![needs met scale - highly meets+](../images/hm+.jpg)

オンライン銀行を使う、またはWebサイトを使用するというユーザーの意図を満たし、結果に非常に満足している。

</div>
</div>
</div>
</div>

<div class="source">
Copyright 2020 © Google (<a href="https://static.googleusercontent.com/media/guidelines.raterhub.com///searchqualityevaluatorguidelines.pdf">source</a>)
</div>
