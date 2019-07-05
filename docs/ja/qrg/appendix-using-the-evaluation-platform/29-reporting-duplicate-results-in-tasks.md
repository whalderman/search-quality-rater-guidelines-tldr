# 重複するLPの報告

いくつかの評価タスクでは、結果が重複であるかどうかを判断するよう求められる。このセクションでは、Needs Met評価タスクで重複結果を報告する方法のガイダンスと例を示す。

## 検出済みの重複ページ

一部の重複した結果が自動的に検出され、事前に特定される。それらは、スライダーの真下で、RB上に、テキスト「**Same as**...」で注釈が付けられる。

これは以前に確認された重複。

左側|右側
---|---
![](../images/img862.jpg)|![](../images/img863.jpg)

> **注：** 自動的に検出され、事前に識別されたdupesを選択することはできない。

## 評価者が確認した重複

評価者の皆さんも、自動検出されていない重複した検索結果を発見してください。LPのコンテンツが本質的に同一で、「1つのクエリに対して、検索エンジンがこれらのページを両方とも表示する必要はない」と思う場合は、両者が重複であることを報告してください。

本プロジェクトにおいて、重複の検出は**クエリに依存する**点に注意しましょう。

- **特定のクエリ：** ユーザーが「歌詞」「特定の記事」等の特定のコンテンツを求めている場合、そうしたコンテンツを複数のWebサイトから入手することは情報検証に役立つので、**重複だとは判定しない**でください。

- **広範囲のクエリ：** クエリの意図が幅広い場合、ユーザーは同一のコンテンツを複数表示してほしいわけではないので、これらの検索結果は**重複である**と判定してください。広告・画像・リンクなどの些細な点に相違があっても、重複になる点に注意しましょう。

タスク画面の左右を問わずに、重複しているかを確認しましょう。左右に分かれて重複が存在する場合でも、「同一の検索エンジンを使った場合、これらのページを両方とも見たいと思うか」という点を検討しましょう。

> **注：** もし２つのRBがタイプや見た目の異なるコンテンツを持っていたら、同じURLのLPであったとしても重複であるとしないようにする。例えばこれらのブロックはお互い重複しているとマークすべきでない。

|||
-|-
![](../images/img865.jpg)|![](../images/img866.jpg)

## 重複結果を報告する

重複した検索結果を発見した場合、どちらかの結果の上部にある「Select Dupe」リンクをクリックします。クリックした検索結果の上部が、赤くマーカーを引いたように強調表示されます。

![](../images/img868.jpg)

先ほどクリックした検索結果と重複している検索結果にチェックを入れることができるようになり、チェックされた検索結果全体が黄色で強調表示されます。右上の「**Dupe of**...」ボタンを選択してください。

![](../images/img869.jpg)

チェックを入れた検索結果の上部には「**Dupe of**...」という説明が入ります。すべての重複にチェックを入れたら、「**finish selecting dupes**」を押すと、通常の評価業務モードに戻り、他の重複結果がある場合は追加で報告することもできます。チェックした内容は、いつでも取り消すことができます。

<span style="color: red">**重複**</span>

クエリ：<span class="query">バイク用バッテリーの選択と取付け</span>

URL 1: [http://www.caimag.com/wordpress/2010/03/06/motorcycle-battery-how-to-choose-install](http://www.caimag.com/wordpress/2010/03/06/motorcycle-battery-how-to-choose-install)

URL 2: [http://www.articlesbase.com/motorcycles-articles/choosing-and-installing-a-motorcycle-battery-47798.html](http://www.articlesbase.com/motorcycles-articles/choosing-and-installing-a-motorcycle-battery-47798.html)

**理由：** 全く同じ記事が表示される（Web上には、これと同一の記事を掲載したページが多数ある）。両者の違いは、記事の周りに
表示される広告だけ。クエリの意図もそれなりに広く、検索エンジンが重複結果を複数表示してもユーザーの役に立たない。

<span style="color: red">**重複**</span>

クエリ：<span class="query">ジェイソン・カストロ</span>

URL 1: [http://www.myspace.com/jasoncastromusic](http://www.myspace.com/jasoncastromusic)

URL 2: [http://www.myspace.com/jasoncastromusic?MyToken=503599bf-01cf-4427-bdf4-d63920c107f9](http://www.myspace.com/jasoncastromusic?MyToken=503599bf-01cf-4427-bdf4-d63920c107f9)

**理由：** URLは異なるが、LPは同一ページ。検索エンジンが重複結果を複数表示してもユーザーの役に立たない。

<span style="color: green">**重複ではない**</span>

クエリ：<span class="query">material girl 歌詞</span>

URL 1: [http://www.lyricsfreak.com/m/madonna/material+girl_20086925.html](http://www.lyricsfreak.com/m/madonna/material+girl_20086925.html)

URL 2: [http://www.lyrics007.com/Madonna%20Lyrics/Material%20Girl%20Lyrics.html](http://www.lyrics007.com/Madonna%20Lyrics/Material%20Girl%20Lyrics.html)

**理由：** 両方ともマドンナの「Material Girl」の歌詞を表示しているが、ユーザーは両方とも訪問して歌詞の正しさを確かめたいと思うかもしれない。検索エンジンがこの歌詞を掲載したページを複数表示すると、ユーザーの役に立つ。
