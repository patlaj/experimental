---
css:
- https://design.canada.ca/css/split-h1.css
- https://design.canada.ca/css/custom.css
- https://use.fontawesome.com/releases/v5.15.4/css/all.css
layout: - default
nomenu: true
nositesearch: true
pageclass: cnt-wdth-lmtd
altLangPage: /experimental/prycrane/accessibility/afeedback-01-fr.html
pageclass: cnt-wdth-lmtd
breadcrumbs: false
lang: en
share: True
title: Accessibility
description: 
  en: Find Employment and Social Development Canada's accessibility plan and provide feedback. 
dateModified: 2022-11-09
---
<h1 property="name" id="wb-cont" dir="ltr"><span class="stacked"><span>Accessibility feedback form</span>: <span>Employment and Social Development Canada (ESDC)</span></span></h1>
<div class="wb-frmvld">
  <form action="#" method="get" id="accessibility_feedback">
    <div class="wb-fieldflow gc-font-2019" data-wb-fieldflow='{"noForm": true, "renderas":"radio", "gcChckbxrdio":true}'>
      <p>1. What do you want to provide feedback on?</p>
      <ul>
        <li data-wb-fieldflow='{"action": "query", "name": "feedback_type", "value": "feedback_type1"}'>Accessibility barrier</li>
        <li data-wb-fieldflow='{"action": "query", "name": "feedback_type", "value": "feedback_type2"}' >Canadian Heritage Accessibility Plan 2023-2025</li>
        <li data-wb-fieldflow='[
                                {"action": "toggle", "toggle": "#feedback_type_other", "live":true },
                                {"action": "query", "name": "feedback_type", "value": "feedback_type3" }
                               ]'>Other item</li>
      </ul>
    </div>
    <div id="feedback_type_other" class="hidden">
      <div class="form-group">
        <label for="feedback_type3_desc"><span class="field-name gc-font-2019">Describe "Other item" you want to provide feedback on</span></label>
        <input class="form-control full-width input-lg" id="feedback_type3_desc" name="feedback_type3_desc" type="text" />
      </div>
    </div>
    <div class="wb-fieldflow gc-font-2019" data-wb-fieldflow='{"noForm": true, "renderas":"checkbox", "gcChckbxrdio":true}'>
      <p>2. Select all the areas that are relevant to your comments</p>
      <ul>
        <li data-wb-fieldflow='{"action": "query", "name": "areas", "value": "areas1"}'>Programs</li>
        <li data-wb-fieldflow='{"action": "query", "name": "areas", "value": "areas2"}'>Services</li>
        <li data-wb-fieldflow='{"action": "query", "name": "areas", "value": "areas3"}'>Events</li>
        <li data-wb-fieldflow='{"action": "query", "name": "areas", "value": "areas4"}'>Physical and architectural (doorknob, ramp, elevator, etc)</li>
        <li data-wb-fieldflow='{"action": "query", "name": "areas", "value": "areas5"}'>Employment (example: recruitment processes)</li>
        <li data-wb-fieldflow='{"action": "query", "name": "areas", "value": "areas6"}'>Technological (websites, software applications)</li>
        <li data-wb-fieldflow='{"action": "query", "name": "areas", "value": "areas7"}'>Attitudinal (biases, microaggressions, related to my mental health, etc.)</li>
        <li data-wb-fieldflow='{"action": "query", "name": "areas", "value": "areas8"}'>Information and communication (forms, plain language, bilingualism)</li>
        <li data-wb-fieldflow='{"action": "query", "name": "areas", "value": "areas9"}'>Systemic (exclusion from events, policies, procedures, etc.)</li>
        <li data-wb-fieldflow='{"action": "query", "name": "areas", "value": "areas10"}'>Procurement</li>
        <li data-wb-fieldflow='[
                                {"action": "toggle", "toggle": "#area_other", "live": true},
                                {"action": "query", "name": "areas", "value": "areas11"}
                                ]'>Other area</li>
      </ul>
    </div>
    <div id="area_other" class="hidden">
      <div class="form-group">
        <label for="areas_desc"><span class="field-name gc-font-2019">Describe "Other area" you want to provide feedback on</span></label>
        <input class="form-control full-width input-lg" id="areas_desc" name="areas_desc" type="text" />
      </div>
    </div>
    <div class="form-group">
      <label for="description" class="required"><span class="field-name gc-font-2019">3. Describe the accessibility barrier and provide comments.  
        Do not include information that could identify a person. <strong class="required">(required)</strong></span></label>
      <textarea class="form-control required full-width" rows="10" id="description"></textarea>
    </div>
    <div class="alert alert-warning mrgn-tp-lg gc-font-2019">
      <p>To receive a <strong>follow-up to your feedback</strong> or to <strong>subscribe to our newsletter</strong> that will give you access to future 
        consultation plans we will need your <strong>email address</strong>.  Your email address will not be shared.</p>
    </div>
    <div class="wb-fieldflow gc-font-2019" data-wb-fieldflow='{"noForm": true, "renderas":"radio", "gcChckbxrdio":true}'>
      <p>4.  Do you want to provide your email address?</p>
      <ul>
        <li data-wb-fieldflow='{"action": "query", "name": "feedback_type", "value": "feedback_type1"}'>No, I want to remain fully anonymous.</li>
        <li data-wb-fieldflow='[
                                {"action": "toggle", "toggle": "#email_request_other", "live":true },
                                {"action": "query", "name": "feedback_type", "value": "feedback_type3" }
                               ]'>Yes, I’m comfortable providing my email.</li>
      </ul>
    </div>
    <div id="email_request_other" class="hidden">
      <div class="form-group">
        <label for="email1"><span class="field-name gc-font-2019">Email address</span> (yourname@domain.com)</label>
        <input class="form-control input-lg" id="email1" name="email1" type="email" autocomplete="email" />
      </div>
      <fieldset class="gc-chckbxrdio">
        <ul class="list-unstyled lst-spcd-2">
          <li class="checkbox">
            <input type="checkbox" id="cond1" checked>
            <label for="cond1">I would like to be contacted for follow-up on the feedback I provided.</label>
          </li>
          <li class="checkbox">
            <input type="checkbox" id="cond2">
            <label for="cond2">I would like to subscribe to your newsletter 
              and be consulted on Canadian Heritage accessibility plans, reports and other 
              initiatives related to accessibility and disability inclusion in the future.</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </form>
</div>
<ul class="list-inline mrgn-tp-lg">
  <li><a href="afeedback-02-en.html" type="button" class="btn btn-default btn-lg">Cancel</a></li>
  <li><a href="afeedback-05-en.html" type="button" class="btn btn-primary btn-lg">Submit feedback</a></li>
</ul>

