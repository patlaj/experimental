---
altLangPage: #
dateModified: 2021-06-29
lang: en
layout: default
title: Tables, caption and forms
---
## Tables
<table class="wb-tables table">
  <caption>Table 1</caption>
  <tfoot>
    <tr>
      <td>Total:</td>
      <td>All the data</td>
      <td></td>
    </tr>
  </tfoot>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1.1</td>
      <td>Data 1.2</td>
      <td>Data 1.3</td>
    </tr>
    <tr>
      <td>Data 2.1</td>
      <td>Data 2.2</td>
      <td>Data 2.3</td>
    </tr>
    <tr>
      <td>Data 3.1</td>
      <td>Data 3.2</td>
      <td>Data 3.3</td>
    </tr>
  </tbody>
</table>

## Captions

### Image
{::nomarkdown}
<figure class="thumbnail">
  <img src="../images/ip-cover-image.jpg" alt="Long description after the image" class="img-responsive">
  <figcaption>The long description goes here<figcaption>
</figure>
{:/}

### Code snippet
{::nomarkdown}
<figure class="panel panel-default">
  <figcaption class="panel-heading"><p class="panel-title">Get browser details using <code>navigator</code>.</p></figcaption>
  <pre class="panel-body"><code>function NavigatorExample() {
  var txt;
  txt = "Browser CodeName: " + navigator.appCodeName + "; ";
  txt+= "Browser Name: " + navigator.appName + "; ";
  txt+= "Browser Version: " + navigator.appVersion  + "; ";
  txt+= "Cookies Enabled: " + navigator.cookieEnabled  + "; ";
  txt+= "Platform: " + navigator.platform  + "; ";
  txt+= "User-agent header: " + navigator.userAgent  + "; ";
  console.log("NavigatorExample", txt);
}</code></pre>
</figure>
{:/}

### Quotation
{::nomarkdown}
<figure>
  <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
  <blockquote>If debugging is the process of removing software bugs,
  then programming must be the process of putting them in.</blockquote>
</figure>
{:/}

### Poem
{::nomarkdown}
<figure>
  <p style="white-space:pre">Bid me discourse, I will enchant thine ear,
  Or like a fairy trip upon the green,
Or, like a nymph, with long dishevell'd hair,
  Dance on the sands, and yet no footing seen:
Love is a spirit all compact of fire,
  Not gross to sink, but light, and will aspire.</p>
  <figcaption><cite>Venus and Adonis</cite>,
    by William Shakespeare</figcaption>
</figure>
{:/}

## Forms

<form action="" method="get">
  <div class="form-group">
    <label for="name" class="control-label">Enter your name: </label>
    <input type="text" class="form-control" name="name" id="name" required>
  </div>
  <div class="form-group">
    <label for="email" class="control-label">Enter your email: </label>
    <input type="email" class="form-control" name="email" id="email" required>
  </div>
  <div class="form-group">
    <label for="btngrp-search2" class="wb-inv">Search</label>
    <div class="input-group">
      <input type="text" class="form-control" id="btngrp-search2" placeholder="Search this page..." />
      <span class="input-group-btn">
      <button class="btn btn-default" type="button">Search</button>
      </span>
    </div>
  </div>
  <fieldset class="chkbxrdio-grp">
    <legend>Choose your prefered option:</legend>
    <div class="radio">
      <label>
        <input type="radio" name="radio"> Select HTML
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="radio"> Select Plain text
      </label>
    </div>
  </fieldset>
  <div class="form-group">
    <input type="submit" class="btn btn-primary" value="Subscribe!">
  </div>
</form>
