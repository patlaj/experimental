---
altLangPage: #
dateModified: 2021-06-24
lang: en
layout: default
title: Possible use of links outside of components
---
## Examples

### Input form labels
<form action="#" method="post" id="test-form-1">
  <div class="form-group">
    <label for="title1" class="required">
      <span class="field-name">Title</span> <strong class="required">(required)</strong> <a href="#"><span class="glyphicon glyphicon-info-sign"></span> more info</a>
    </label>
    <select class="form-control" id="title1" name="title1" autocomplete="honorific-prefix" required="required">
      <option laabel="Select a title"></option>
      <option value="dr">Dr.</option>
      <option value="esq">Esq.</option>
      <option value="mr">Mr.</option>
      <option value="ms">Ms.</option>
    </select>
  </div>
</form>

### Tables

<table class="wb-tables table" data-wb-tables='{ "ordering" : false }'>
  <caption>Table 1</caption>
  <thead>
    <tr>
      <th>Event</th>
      <th>Trigger</th>
      <th>What it does</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Event 1</td>
      <td>Trigger 1</td>
      <td><a href="#"><span class="glyphicon glyphicon-info-sign"></span> more info</a></td>
    </tr>
  </tbody>
</table>

### Badges

<p><a href="#">Inbox <span class="badge">42<span class="wb-inv"> unread emails</span></span></a></p>

### Labels

<p>Some text here <span class="label label-default"><a href="#">label info</a></span></p>

### Details/Summary
<details>
  <summary>Exemple 1</summary>
  <p>Some text here <a href="#">(more info)</a></p>
</details>