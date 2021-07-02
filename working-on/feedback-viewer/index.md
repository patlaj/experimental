---
altLangPage: "https://feedback-viewer.tbs.alpha.canada.ca/pageFeedback?lang=fr"
dateModified: 2021-07-02
description: "Feedback viewer description"
lang: en
layout: no-container
title: "Feedback viewer"
---
<div class="container">
    <h4 class="wb-inv">Filtering options</h4>
    <form class="wb-tables-filter" data-bind-to="problemTable">
        <h4 class="h4">Filter options</h4>
        <p class="mrgn-tp-md">Use filters to change your results in the data table</p>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="Department">Department</label>
                    <select class="form-control" id="Department" name="Department" data-column="7">
                        <option value="">All</option>
                        <option value="CRA">Canada Revenue Agency</option>
                        <option value="DFO">Department of Fisheries and Oceans</option>
                        <option value="Employment and Social Development Canada">Employment and Social Development Canada</option>
                        <option value="FCAC">Financial Consumer Agency of Canada</option>
                        <option value="FIN">Department of Finance</option>
                        <option value="Health Canada">Health Canada</option>
                        <option value="ISED">Innovation, Science and Economic Development Canada</option>
                        <option value="NRC">National Research Council</option>
                        <option value="Public Health Agency of Canada">Public Health Agency of Canada</option>
                        <option value="PSPC">Public Services and Procurement Canada</option>
                        <option value="TBS">Treasury Board of Canada Secretariat</option>
                    <!-- DEPARTMENTS -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="Section">Section</label>
                    <select class="form-control" id="Section" name="Section" data-column="8">
                        <option value="">All</option>
                        <option value="travel-wizard">travel-wizard</option>
                        <option value="COVID">COVID</option>
                        <option value="CRB">CRB</option>
                        <option value="Vaccines">Vaccines</option>
                        <option value="CRSB">CRSB</option>
                        <option value="PTR">PTR</option>
                        <option value="COVID Alert">COVID Alert</option>
                        <option value="CRSB">CRSB</option>
                        <option value="CEWS">CEWS</option>
                        <option value="CERS">CERS</option>
                        <option value="Business">Business</option>
                        <option value="WFHE">WFHE</option>
                        <option value="ITB">ITB</option>
                        <option value="ECM">ECM</option>
                        <option value="Health">Health</option>
                        <option value="Pay">Pay</option>
                        <option value="CIG">CIG</option>
                        <option value="Sign in">Sign in</option>
                        <option value="PIT">PIT</option>
                        <option value="GST/HST">GST/HST</option>
                        <option value="CERB">CERB</option>
                        <option value="Design system">Design system</option>
                        <option value="Retirement planning">Retirement planning</option>
                        <option value="Skills for Success">Skills for Success</option>
                        <option value="COVID-19 data trends">COVID-19 data trends</option>
                        <option value="Social Development Partnerships Program">Social Development Partnerships Program</option>
                        <option value="OBJ">OBJ</option>
                        <option value="Mortgages">Mortgages</option>
                        <option value="CEWS-CRHP">CEWS-CRHP</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="Theme">Theme</label>
                    <select class="form-control" id="Theme" name="Theme" data-column="9">
                        <option value="">All</option>
                        <option value="Business">Business</option>
                        <option value="COVID">COVID</option>
                        <option value="Environment and natural resources">Environment and Natural Resources</option>
                        <option value="Health">Health</option>
                        <option value="Money and finances">Money and Finances</option>
                        <option value="Public Service">Public Service</option>
                        <option value="Science and innovation">Science and Innovation</option>
                        <option value="Travel">Travel</option>
                        <option value="Taxes">Taxes</option>
                        <!-- THEMES -->
                    </select>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="min">Date Range
                        <span class="wb-inv">from start date</span>
                    </label>
                    <div class="form-inline">
                        <div class="form-group">
                            <input type="date" class="form-control" id="min" name="min" data-column="0">
                        </div>
                        <label for="max">To
                            <span class="wb-inv">end date</span>
                        </label>
                        <div class="form-group">
                            <input type="date" class="form-control" id="max" name="max" data-column="0">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group mrgn-bttm-xl">
          <button type="submit" class="btn btn-primary" aria-controls="problemTable">Filter</button>
          <button type="reset" class="btn btn-link">Reset to defaults</button>
        </div>
    </form>
</div>
<table class="wb-tables table"
       id="problemTable"
       data-wb-tables='{ 
        "ajaxSource": "ajax/problemData.json",
        "columns": [
          {
            "data": "problemDate"
          }, {
            "data": "problemDetails"
          }, {
            "data": "problem"
          }, {
            "data": "url"
          }, {
            "data": "language"
          }, {
            "data": "institution"
          }, {
            "data": "section"
          }, {
            "data": "theme"
         }
        ],
        "retrieve": true,
        "serverSide": true
      }'>
  <thead>
    <tr>
      <th>Date</th>
      <th>Comment</th>
      <th>Problem</th>
      <th>URL</th>
      <th>Language</th>
      <th>Department</th>
      <th>Section</th>
      <th>Theme</th>
    </tr>
  </thead>
</table>
