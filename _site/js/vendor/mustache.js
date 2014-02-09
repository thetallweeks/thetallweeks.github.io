




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>mustache.js/mustache.js at master · janl/mustache.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="janl/mustache.js" name="twitter:title" /><meta content="mustache.js - Minimal templating with {{mustaches}} in JavaScript" name="twitter:description" /><meta content="https://2.gravatar.com/avatar/2af516fdc33afea661fb3b32c769c9cc?d=https%3A%2F%2Fidenticons.github.com%2Ffe09f091f5c661afdf1f5069a4136735.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://2.gravatar.com/avatar/2af516fdc33afea661fb3b32c769c9cc?d=https%3A%2F%2Fidenticons.github.com%2Ffe09f091f5c661afdf1f5069a4136735.png&amp;r=x&amp;s=400" property="og:image" /><meta content="janl/mustache.js" property="og:title" /><meta content="https://github.com/janl/mustache.js" property="og:url" /><meta content="mustache.js - Minimal templating with {{mustaches}} in JavaScript" property="og:description" />

    <meta name="hostname" content="github-fe124-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87d8860372) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="42D732F3:53A9:43424AA:52F49A00" name="octolytics-dimension-request_id" /><meta content="1364726" name="octolytics-actor-id" /><meta content="kmweeks" name="octolytics-actor-login" /><meta content="e158e4fd319d296723fc06f949efbcd46ae59f6c053df61a4e2bb32814493894" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="+FrESwnB8+9DOnQ+/bQmCarVZzniFMS5v7Wl+ZroUCc=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-f75ad12241fc0d2d7c903870c877da49bf925f5b.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-eedb06b089d2ef792059bc2ebee160f716fa7aab.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8d62aa911c75d1d60662859d52c3cf1232675e6.js" type="text/javascript"></script>
      <script async="async" defer="defer" src="https://github.global.ssl.fastly.net/assets/github-62b15e7c9c7aead7539d1a6b7523410cfd4d33a5.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="59617e98acce9d59e36d799192b445af">

        <link data-pjax-transient rel='permalink' href='/janl/mustache.js/blob/c673e21f3c6d731d2bc25a2f52b7327c63ffd167/mustache.js'>

  <meta name="description" content="mustache.js - Minimal templating with {{mustaches}} in JavaScript" />

  <meta content="11321" name="octolytics-dimension-user_id" /><meta content="janl" name="octolytics-dimension-user_login" /><meta content="326688" name="octolytics-dimension-repository_id" /><meta content="janl/mustache.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="326688" name="octolytics-dimension-repository_network_root_id" /><meta content="janl/mustache.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/janl/mustache.js/commits/master.atom" rel="alternate" title="Recent Commits to mustache.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have unread notifications">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="kmweeks"
      data-repo="janl/mustache.js"
      data-branch="master"
      data-sha="15fc3a67bb92057d08a0ab151a2fa1a07778038b"
  >

    <input type="hidden" name="nwo" value="janl/mustache.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/kmweeks" class="name">
        <img alt="kmweeks" height="20" src="https://0.gravatar.com/avatar/48a9ff94bcc798b2a313fc18bf5bee0d?d=https%3A%2F%2Fidenticons.github.com%2Fb3c37a245256b4d4a83d344026119f60.png&amp;r=x&amp;s=140" width="20" /> kmweeks
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped downwards" title="Create new..." aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped downwards"
        aria-label="Account settings "
        title="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>



<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="janl/mustache.js">This repository</span>
    </li>
      <li>
        <a href="/janl/mustache.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="+FrESwnB8+9DOnQ+/bQmCarVZzniFMS5v7Wl+ZroUCc=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="326688" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/janl/mustache.js/watchers">
        323
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/janl/mustache.js/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/janl/mustache.js/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/janl/mustache.js/stargazers">
        5,995
      </a>
  </div>

  </li>


        <li>
          <a href="/janl/mustache.js/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/janl/mustache.js/network" class="social-count">1,228</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/janl" class="url fn" itemprop="url" rel="author"><span itemprop="title">janl</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/janl/mustache.js" class="js-current-repository js-repo-home-link">mustache.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/janl/mustache.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /janl/mustache.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/janl/mustache.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /janl/mustache.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>52</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/janl/mustache.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /janl/mustache.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>27</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/janl/mustache.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /janl/mustache.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/janl/mustache.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /janl/mustache.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/janl/mustache.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /janl/mustache.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/janl/mustache.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /janl/mustache.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/janl/mustache.js.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/janl/mustache.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:janl/mustache.js.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:janl/mustache.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/janl/mustache.js" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/janl/mustache.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/janl/mustache.js" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/janl/mustache.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ca0d24ec6fe4997b38ab8dcfa7726369 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/janl/mustache.js/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/blob/0.4.x/mustache.js"
                 data-name="0.4.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.x">0.4.x</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/blob/0.8/mustache.js"
                 data-name="0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8">0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/blob/fix_commonjs/mustache.js"
                 data-name="fix_commonjs"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="fix_commonjs">fix_commonjs</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/blob/gh-pages/mustache.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/blob/helpers/mustache.js"
                 data-name="helpers"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="helpers">helpers</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/blob/master/mustache.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/blob/new-build-system/mustache.js"
                 data-name="new-build-system"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="new-build-system">new-build-system</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/blob/parser-rewrite/mustache.js"
                 data-name="parser-rewrite"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="parser-rewrite">parser-rewrite</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/blob/rewrite/mustache.js"
                 data-name="rewrite"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="rewrite">rewrite</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/blob/with-js-extras/mustache.js"
                 data-name="with-js-extras"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="with-js-extras">with-js-extras</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.8.1/mustache.js"
                 data-name="0.8.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.1">0.8.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.8.0/mustache.js"
                 data-name="0.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.0">0.8.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.7.3/mustache.js"
                 data-name="0.7.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.7.3">0.7.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.7.2/mustache.js"
                 data-name="0.7.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.7.2">0.7.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.7.1/mustache.js"
                 data-name="0.7.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.7.1">0.7.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.7.0/mustache.js"
                 data-name="0.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.7.0">0.7.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.6.0/mustache.js"
                 data-name="0.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.0">0.6.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.5.2-vsc/mustache.js"
                 data-name="0.5.2-vsc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.2-vsc">0.5.2-vsc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.5.2/mustache.js"
                 data-name="0.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.2">0.5.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.5.1-vsc/mustache.js"
                 data-name="0.5.1-vsc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.1-vsc">0.5.1-vsc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.5.1/mustache.js"
                 data-name="0.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.1">0.5.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.5.0-vsc/mustache.js"
                 data-name="0.5.0-vsc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.0-vsc">0.5.0-vsc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.4.2/mustache.js"
                 data-name="0.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.2">0.4.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.4.1/mustache.js"
                 data-name="0.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.1">0.4.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.4.0/mustache.js"
                 data-name="0.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.0">0.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.3.0/mustache.js"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.2.3/mustache.js"
                 data-name="0.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.3">0.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.2.2/mustache.js"
                 data-name="0.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.2">0.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.2.1/mustache.js"
                 data-name="0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.1">0.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.2/mustache.js"
                 data-name="0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2">0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.1/mustache.js"
                 data-name="0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1">0.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/janl/mustache.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">mustache.js</span></a></span></span><span class="separator"> / </span><strong class="final-path">mustache.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="mustache.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/9210a60b1492363560375d9cd6c842de?d=https%3A%2F%2Fidenticons.github.com%2F8e580e6df6a56e3c2b15d41946b7ef9d.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/mjijackson" rel="author">mjijackson</a></span>
    <time class="js-relative-date" datetime="2014-01-07T22:15:05-08:00" title="2014-01-07 22:15:05">January 07, 2014</time>
    <div class="commit-title">
        <a href="/janl/mustache.js/commit/96c43e4c21df692f7d17a9cc4dedd171e583cd9b" class="message" data-pjax="true" title="Documentation tweaks">Documentation tweaks</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>26</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="mjijackson" href="/janl/mustache.js/commits/master/mustache.js?author=mjijackson"><img height="20" src="https://0.gravatar.com/avatar/9210a60b1492363560375d9cd6c842de?d=https%3A%2F%2Fidenticons.github.com%2F8e580e6df6a56e3c2b15d41946b7ef9d.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="janl" href="/janl/mustache.js/commits/master/mustache.js?author=janl"><img height="20" src="https://0.gravatar.com/avatar/2af516fdc33afea661fb3b32c769c9cc?d=https%3A%2F%2Fidenticons.github.com%2Ffe09f091f5c661afdf1f5069a4136735.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="bcherry" href="/janl/mustache.js/commits/master/mustache.js?author=bcherry"><img height="20" src="https://2.gravatar.com/avatar/11ca08051b8b1cd99938f110d589ba0b?d=https%3A%2F%2Fidenticons.github.com%2Fbdc70a27c8f07dd38b0b952db0d73543.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="langalex" href="/janl/mustache.js/commits/master/mustache.js?author=langalex"><img height="20" src="https://2.gravatar.com/avatar/920993ef8f677cc1be50fde5ce8cb4bb?d=https%3A%2F%2Fidenticons.github.com%2F7bc1ec1d9c3426357e69acd5bf320061.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="brandonpayton" href="/janl/mustache.js/commits/master/mustache.js?author=brandonpayton"><img height="20" src="https://2.gravatar.com/avatar/77228d6bff739811647ce923febe2ecb?d=https%3A%2F%2Fidenticons.github.com%2F5c7ffd28ce482210369171f6ebf3ca9b.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="cweider" href="/janl/mustache.js/commits/master/mustache.js?author=cweider"><img height="20" src="https://2.gravatar.com/avatar/15ebb924e2fb0aa110c1176220b1a908?d=https%3A%2F%2Fidenticons.github.com%2F4113e430544c25cc1af8e2317f4b7875.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="davisp" href="/janl/mustache.js/commits/master/mustache.js?author=davisp"><img height="20" src="https://0.gravatar.com/avatar/7613fb4886bd0155fe1f553f6509d876?d=https%3A%2F%2Fidenticons.github.com%2Faa8f7e46ca13ec4051e4b358eb9273ac.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="glytch" href="/janl/mustache.js/commits/master/mustache.js?author=glytch"><img height="20" src="https://identicons.github.com/e0413443ad67ce88208e6159c63b742f.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tisba" href="/janl/mustache.js/commits/master/mustache.js?author=tisba"><img height="20" src="https://0.gravatar.com/avatar/5a342a41b386d3e37a1ed6d2232e4b87?d=https%3A%2F%2Fidenticons.github.com%2F95a62165d7784d4c1e8bbb3bdcb18d56.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="busticated" href="/janl/mustache.js/commits/master/mustache.js?author=busticated"><img height="20" src="https://0.gravatar.com/avatar/c1405c84574508ad5f32c4f7fbc201f0?d=https%3A%2F%2Fidenticons.github.com%2F74dbcea2404b0d93a24bb5ad4575b558.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="agibralter" href="/janl/mustache.js/commits/master/mustache.js?author=agibralter"><img height="20" src="https://0.gravatar.com/avatar/de396cedd7085b8ac01f8c18a7e24167?d=https%3A%2F%2Fidenticons.github.com%2F43baa6762fa81bb43b39c62553b2970d.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jhs" href="/janl/mustache.js/commits/master/mustache.js?author=jhs"><img height="20" src="https://2.gravatar.com/avatar/dc5c27144fe63c00375ee47da00c5621?d=https%3A%2F%2Fidenticons.github.com%2Fec160682cb3586d851071e80ec63d6c0.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="johnnypez" href="/janl/mustache.js/commits/master/mustache.js?author=johnnypez"><img height="20" src="https://2.gravatar.com/avatar/638d038b4d4df3968368371055164768?d=https%3A%2F%2Fidenticons.github.com%2F66844528f335afaa6a069620595210e9.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="laktek" href="/janl/mustache.js/commits/master/mustache.js?author=laktek"><img height="20" src="https://0.gravatar.com/avatar/78f629467a182fffdca5a327045fd362?d=https%3A%2F%2Fidenticons.github.com%2F3a246af2678dfad0d536e0a62cf49179.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="soitgoes" href="/janl/mustache.js/commits/master/mustache.js?author=soitgoes"><img height="20" src="https://1.gravatar.com/avatar/cdc15d9fb844bcd93ddf7c1407483238?d=https%3A%2F%2Fidenticons.github.com%2F0141e0ce1502d3c13b4a0e518b6b7a1e.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mattsacks" href="/janl/mustache.js/commits/master/mustache.js?author=mattsacks"><img height="20" src="https://1.gravatar.com/avatar/00e830fca970c0cf69df20f879d03567?d=https%3A%2F%2Fidenticons.github.com%2Fea914fe9e99eec031d7d083a996aa563.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mrdon" href="/janl/mustache.js/commits/master/mustache.js?author=mrdon"><img height="20" src="https://1.gravatar.com/avatar/6c5774a17f0fae7933adfe0293ee59f3?d=https%3A%2F%2Fidenticons.github.com%2Feb453b86e59bbc3c6c3ec9f352469319.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="shenfeng" href="/janl/mustache.js/commits/master/mustache.js?author=shenfeng"><img height="20" src="https://2.gravatar.com/avatar/0d3797cb1e143e1db0a4db401253c6a3?d=https%3A%2F%2Fidenticons.github.com%2F87dacee8266bb61f76b39f6c07af709d.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="thegrandpoobah" href="/janl/mustache.js/commits/master/mustache.js?author=thegrandpoobah"><img height="20" src="https://2.gravatar.com/avatar/05663d4e7f36f900ecd98ed1cbe76553?d=https%3A%2F%2Fidenticons.github.com%2Fe0e69031999179a2c3f20f9bcfdb351b.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="defunkt" href="/janl/mustache.js/commits/master/mustache.js?author=defunkt"><img height="20" src="https://0.gravatar.com/avatar/b8dbb1987e8e5318584865f880036796?d=https%3A%2F%2Fidenticons.github.com%2Fc81e728d9d4c2f636f067f89cc14862c.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="voodootikigod" href="/janl/mustache.js/commits/master/mustache.js?author=voodootikigod"><img height="20" src="https://2.gravatar.com/avatar/fff2222d0a24009fe938bba62946201a?d=https%3A%2F%2Fidenticons.github.com%2F7fe1f8abaad094e0b5cb1b01d712f708.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tmcw" href="/janl/mustache.js/commits/master/mustache.js?author=tmcw"><img height="20" src="https://0.gravatar.com/avatar/69a180136f3c237769452a4af0bbb9a1?d=https%3A%2F%2Fidenticons.github.com%2Fdd39fad8b6d919682beca3fe8af879d3.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="vackraord" href="/janl/mustache.js/commits/master/mustache.js?author=vackraord"><img height="20" src="https://0.gravatar.com/avatar/55ece7fe85172a925e8ff1821d611650?d=https%3A%2F%2Fidenticons.github.com%2Fcda13ac4a9a2d126adc5a6fa5e28b822.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kannix" href="/janl/mustache.js/commits/master/mustache.js?author=kannix"><img height="20" src="https://0.gravatar.com/avatar/84b5caf1dcc1fbe4cc7c71139ae7dd8b?d=https%3A%2F%2Fidenticons.github.com%2F6e0a1f7d9edf156ace227ded07d35654.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="utvara" href="/janl/mustache.js/commits/master/mustache.js?author=utvara"><img height="20" src="https://1.gravatar.com/avatar/6104768b41808e94352afcdf2393f6ca?d=https%3A%2F%2Fidenticons.github.com%2Fe844c637a67dbeb06420c76655d3f518.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="woledzki" href="/janl/mustache.js/commits/master/mustache.js?author=woledzki"><img height="20" src="https://1.gravatar.com/avatar/86bd637961ce966408081f2b686d631d?d=https%3A%2F%2Fidenticons.github.com%2F721213c5060b8896b9eb9335fa8498a8.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/9210a60b1492363560375d9cd6c842de?d=https%3A%2F%2Fidenticons.github.com%2F8e580e6df6a56e3c2b15d41946b7ef9d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mjijackson">mjijackson</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/2af516fdc33afea661fb3b32c769c9cc?d=https%3A%2F%2Fidenticons.github.com%2Ffe09f091f5c661afdf1f5069a4136735.png&amp;r=x&amp;s=140" width="24" />
            <a href="/janl">janl</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/11ca08051b8b1cd99938f110d589ba0b?d=https%3A%2F%2Fidenticons.github.com%2Fbdc70a27c8f07dd38b0b952db0d73543.png&amp;r=x&amp;s=140" width="24" />
            <a href="/bcherry">bcherry</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/920993ef8f677cc1be50fde5ce8cb4bb?d=https%3A%2F%2Fidenticons.github.com%2F7bc1ec1d9c3426357e69acd5bf320061.png&amp;r=x&amp;s=140" width="24" />
            <a href="/langalex">langalex</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/77228d6bff739811647ce923febe2ecb?d=https%3A%2F%2Fidenticons.github.com%2F5c7ffd28ce482210369171f6ebf3ca9b.png&amp;r=x&amp;s=140" width="24" />
            <a href="/brandonpayton">brandonpayton</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/15ebb924e2fb0aa110c1176220b1a908?d=https%3A%2F%2Fidenticons.github.com%2F4113e430544c25cc1af8e2317f4b7875.png&amp;r=x&amp;s=140" width="24" />
            <a href="/cweider">cweider</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/7613fb4886bd0155fe1f553f6509d876?d=https%3A%2F%2Fidenticons.github.com%2Faa8f7e46ca13ec4051e4b358eb9273ac.png&amp;r=x&amp;s=140" width="24" />
            <a href="/davisp">davisp</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://identicons.github.com/e0413443ad67ce88208e6159c63b742f.png" width="24" />
            <a href="/glytch">glytch</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/5a342a41b386d3e37a1ed6d2232e4b87?d=https%3A%2F%2Fidenticons.github.com%2F95a62165d7784d4c1e8bbb3bdcb18d56.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tisba">tisba</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/c1405c84574508ad5f32c4f7fbc201f0?d=https%3A%2F%2Fidenticons.github.com%2F74dbcea2404b0d93a24bb5ad4575b558.png&amp;r=x&amp;s=140" width="24" />
            <a href="/busticated">busticated</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/de396cedd7085b8ac01f8c18a7e24167?d=https%3A%2F%2Fidenticons.github.com%2F43baa6762fa81bb43b39c62553b2970d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/agibralter">agibralter</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/dc5c27144fe63c00375ee47da00c5621?d=https%3A%2F%2Fidenticons.github.com%2Fec160682cb3586d851071e80ec63d6c0.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jhs">jhs</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/638d038b4d4df3968368371055164768?d=https%3A%2F%2Fidenticons.github.com%2F66844528f335afaa6a069620595210e9.png&amp;r=x&amp;s=140" width="24" />
            <a href="/johnnypez">johnnypez</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/78f629467a182fffdca5a327045fd362?d=https%3A%2F%2Fidenticons.github.com%2F3a246af2678dfad0d536e0a62cf49179.png&amp;r=x&amp;s=140" width="24" />
            <a href="/laktek">laktek</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/cdc15d9fb844bcd93ddf7c1407483238?d=https%3A%2F%2Fidenticons.github.com%2F0141e0ce1502d3c13b4a0e518b6b7a1e.png&amp;r=x&amp;s=140" width="24" />
            <a href="/soitgoes">soitgoes</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/00e830fca970c0cf69df20f879d03567?d=https%3A%2F%2Fidenticons.github.com%2Fea914fe9e99eec031d7d083a996aa563.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mattsacks">mattsacks</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/6c5774a17f0fae7933adfe0293ee59f3?d=https%3A%2F%2Fidenticons.github.com%2Feb453b86e59bbc3c6c3ec9f352469319.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mrdon">mrdon</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/0d3797cb1e143e1db0a4db401253c6a3?d=https%3A%2F%2Fidenticons.github.com%2F87dacee8266bb61f76b39f6c07af709d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/shenfeng">shenfeng</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/05663d4e7f36f900ecd98ed1cbe76553?d=https%3A%2F%2Fidenticons.github.com%2Fe0e69031999179a2c3f20f9bcfdb351b.png&amp;r=x&amp;s=140" width="24" />
            <a href="/thegrandpoobah">thegrandpoobah</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/b8dbb1987e8e5318584865f880036796?d=https%3A%2F%2Fidenticons.github.com%2Fc81e728d9d4c2f636f067f89cc14862c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/defunkt">defunkt</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/fff2222d0a24009fe938bba62946201a?d=https%3A%2F%2Fidenticons.github.com%2F7fe1f8abaad094e0b5cb1b01d712f708.png&amp;r=x&amp;s=140" width="24" />
            <a href="/voodootikigod">voodootikigod</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/69a180136f3c237769452a4af0bbb9a1?d=https%3A%2F%2Fidenticons.github.com%2Fdd39fad8b6d919682beca3fe8af879d3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tmcw">tmcw</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/55ece7fe85172a925e8ff1821d611650?d=https%3A%2F%2Fidenticons.github.com%2Fcda13ac4a9a2d126adc5a6fa5e28b822.png&amp;r=x&amp;s=140" width="24" />
            <a href="/vackraord">vackraord</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/84b5caf1dcc1fbe4cc7c71139ae7dd8b?d=https%3A%2F%2Fidenticons.github.com%2F6e0a1f7d9edf156ace227ded07d35654.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kannix">kannix</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/6104768b41808e94352afcdf2393f6ca?d=https%3A%2F%2Fidenticons.github.com%2Fe844c637a67dbeb06420c76655d3f518.png&amp;r=x&amp;s=140" width="24" />
            <a href="/utvara">utvara</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/86bd637961ce966408081f2b686d631d?d=https%3A%2F%2Fidenticons.github.com%2F721213c5060b8896b9eb9335fa8498a8.png&amp;r=x&amp;s=140" width="24" />
            <a href="/woledzki">woledzki</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>571 lines (484 sloc)</span>
        <span>16.469 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="github-windows://openRepo/https://github.com/janl/mustache.js?branch=master&amp;filepath=mustache.js" title="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards js-update-url-with-hash"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/janl/mustache.js/edit/master/mustache.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/janl/mustache.js/raw/master/mustache.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/janl/mustache.js/blame/master/mustache.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/janl/mustache.js/commits/master/mustache.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/janl/mustache.js/delete/master/mustache.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * mustache.js - Logic-less {{mustache}} templates with JavaScript</span></div><div class='line' id='LC3'><span class="cm"> * http://github.com/janl/mustache.js</span></div><div class='line' id='LC4'><span class="cm"> */</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="cm">/*global define: false*/</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">exports</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="nx">exports</span><span class="p">);</span> <span class="c1">// CommonJS</span></div><div class='line' id='LC11'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">mustache</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="nx">mustache</span><span class="p">);</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">(</span><span class="nx">mustache</span><span class="p">);</span> <span class="c1">// AMD</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">root</span><span class="p">.</span><span class="nx">Mustache</span> <span class="o">=</span> <span class="nx">mustache</span><span class="p">;</span> <span class="c1">// &lt;script&gt;</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC19'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC20'><span class="p">}(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">mustache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="c1">// Workaround for https://issues.apache.org/jira/browse/COUCHDB-577</span></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="c1">// See https://github.com/janl/mustache.js/issues/189</span></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">RegExp_test</span> <span class="o">=</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">test</span><span class="p">;</span></div><div class='line' id='LC25'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">testRegExp</span><span class="p">(</span><span class="nx">re</span><span class="p">,</span> <span class="nx">string</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">RegExp_test</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">re</span><span class="p">,</span> <span class="nx">string</span><span class="p">);</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">nonSpaceRe</span> <span class="o">=</span> <span class="sr">/\S/</span><span class="p">;</span></div><div class='line' id='LC30'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isWhitespace</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!</span><span class="nx">testRegExp</span><span class="p">(</span><span class="nx">nonSpaceRe</span><span class="p">,</span> <span class="nx">string</span><span class="p">);</span></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Object_toString</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">;</span></div><div class='line' id='LC35'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isArray</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span> <span class="o">||</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Object_toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">;</span></div><div class='line' id='LC37'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isFunction</span><span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span> <span class="nx">object</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">;</span></div><div class='line' id='LC41'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">escapeRegExp</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">string</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[\-\[\]{}()*+?.,\\\^$|#\s]/g</span><span class="p">,</span> <span class="s2">&quot;\\$&amp;&quot;</span><span class="p">);</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">entityMap</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;&amp;&quot;</span><span class="o">:</span> <span class="s2">&quot;&amp;amp;&quot;</span><span class="p">,</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;&lt;&quot;</span><span class="o">:</span> <span class="s2">&quot;&amp;lt;&quot;</span><span class="p">,</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;&gt;&quot;</span><span class="o">:</span> <span class="s2">&quot;&amp;gt;&quot;</span><span class="p">,</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&quot;&#39;</span><span class="o">:</span> <span class="s1">&#39;&amp;quot;&#39;</span><span class="p">,</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;&#39;&quot;</span><span class="o">:</span> <span class="s1">&#39;&amp;#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;/&quot;</span><span class="o">:</span> <span class="s1">&#39;&amp;#x2F;&#39;</span></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">escapeHtml</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">String</span><span class="p">(</span><span class="nx">string</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[&amp;&lt;&gt;&quot;&#39;\/]/g</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">entityMap</span><span class="p">[</span><span class="nx">s</span><span class="p">];</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC60'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">escapeTags</span><span class="p">(</span><span class="nx">tags</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">tags</span><span class="p">)</span> <span class="o">||</span> <span class="nx">tags</span><span class="p">.</span><span class="nx">length</span> <span class="o">!==</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Invalid tags: &#39;</span> <span class="o">+</span> <span class="nx">tags</span><span class="p">);</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">escapeRegExp</span><span class="p">(</span><span class="nx">tags</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">+</span> <span class="s2">&quot;\\s*&quot;</span><span class="p">),</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;\\s*&quot;</span> <span class="o">+</span> <span class="nx">escapeRegExp</span><span class="p">(</span><span class="nx">tags</span><span class="p">[</span><span class="mi">1</span><span class="p">]))</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">];</span></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">whiteRe</span> <span class="o">=</span> <span class="sr">/\s*/</span><span class="p">;</span></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">spaceRe</span> <span class="o">=</span> <span class="sr">/\s+/</span><span class="p">;</span></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">equalsRe</span> <span class="o">=</span> <span class="sr">/\s*=/</span><span class="p">;</span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">curlyRe</span> <span class="o">=</span> <span class="sr">/\s*\}/</span><span class="p">;</span></div><div class='line' id='LC77'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tagRe</span> <span class="o">=</span> <span class="sr">/#|\^|\/|&gt;|\{|&amp;|=|!/</span><span class="p">;</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC80'><span class="cm">   * Breaks up the given `template` string into a tree of tokens. If the `tags`</span></div><div class='line' id='LC81'><span class="cm">   * argument is given here it must be an array with two string values: the</span></div><div class='line' id='LC82'><span class="cm">   * opening and closing tags used in the template (e.g. [ &quot;&lt;%&quot;, &quot;%&gt;&quot; ]). Of</span></div><div class='line' id='LC83'><span class="cm">   * course, the default is to use mustaches (i.e. mustache.tags).</span></div><div class='line' id='LC84'><span class="cm">   *</span></div><div class='line' id='LC85'><span class="cm">   * A token is an array with at least 4 elements. The first element is the</span></div><div class='line' id='LC86'><span class="cm">   * mustache symbol that was used inside the tag, e.g. &quot;#&quot; or &quot;&amp;&quot;. If the tag</span></div><div class='line' id='LC87'><span class="cm">   * did not contain a symbol (i.e. {{myValue}}) this element is &quot;name&quot;. For</span></div><div class='line' id='LC88'><span class="cm">   * all text that appears outside a symbol this element is &quot;text&quot;.</span></div><div class='line' id='LC89'><span class="cm">   *</span></div><div class='line' id='LC90'><span class="cm">   * The second element of a token is its &quot;value&quot;. For mustache tags this is</span></div><div class='line' id='LC91'><span class="cm">   * whatever else was inside the tag besides the opening symbol. For text tokens</span></div><div class='line' id='LC92'><span class="cm">   * this is the text itself.</span></div><div class='line' id='LC93'><span class="cm">   *</span></div><div class='line' id='LC94'><span class="cm">   * The third and fourth elements of the token are the start and end indices,</span></div><div class='line' id='LC95'><span class="cm">   * respectively, of the token in the original template.</span></div><div class='line' id='LC96'><span class="cm">   *</span></div><div class='line' id='LC97'><span class="cm">   * Tokens that are the root node of a subtree contain two more elements: 1) an</span></div><div class='line' id='LC98'><span class="cm">   * array of tokens in the subtree and 2) the index in the original template at</span></div><div class='line' id='LC99'><span class="cm">   * which the closing tag for that section begins.</span></div><div class='line' id='LC100'><span class="cm">   */</span></div><div class='line' id='LC101'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">parseTemplate</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">tags</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tags</span> <span class="o">=</span> <span class="nx">tags</span> <span class="o">||</span> <span class="nx">mustache</span><span class="p">.</span><span class="nx">tags</span><span class="p">;</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">template</span> <span class="o">=</span> <span class="nx">template</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">tags</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tags</span> <span class="o">=</span> <span class="nx">tags</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="nx">spaceRe</span><span class="p">);</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tagRes</span> <span class="o">=</span> <span class="nx">escapeTags</span><span class="p">(</span><span class="nx">tags</span><span class="p">);</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">scanner</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Scanner</span><span class="p">(</span><span class="nx">template</span><span class="p">);</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sections</span> <span class="o">=</span> <span class="p">[];</span>     <span class="c1">// Stack to hold section tokens</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tokens</span> <span class="o">=</span> <span class="p">[];</span>       <span class="c1">// Buffer to hold the tokens</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">spaces</span> <span class="o">=</span> <span class="p">[];</span>       <span class="c1">// Indices of whitespace tokens on the current line</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hasTag</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>    <span class="c1">// Is there a {{tag}} on the current line?</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">nonSpace</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>  <span class="c1">// Is there a non-space char on the current line?</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Strips all whitespace tokens array for the current line</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if there was a {{#tag}} on it and otherwise only space.</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">stripSpace</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">hasTag</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">nonSpace</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">spaces</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">spaces</span><span class="p">.</span><span class="nx">pop</span><span class="p">()];</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">spaces</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasTag</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nonSpace</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">start</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">chr</span><span class="p">,</span> <span class="nx">token</span><span class="p">,</span> <span class="nx">openSection</span><span class="p">;</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="o">!</span><span class="nx">scanner</span><span class="p">.</span><span class="nx">eos</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span> <span class="o">=</span> <span class="nx">scanner</span><span class="p">.</span><span class="nx">pos</span><span class="p">;</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Match any text between tags.</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">scanner</span><span class="p">.</span><span class="nx">scanUntil</span><span class="p">(</span><span class="nx">tagRes</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chr</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isWhitespace</span><span class="p">(</span><span class="nx">chr</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">spaces</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nonSpace</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="s1">&#39;text&#39;</span><span class="p">,</span> <span class="nx">chr</span><span class="p">,</span> <span class="nx">start</span><span class="p">,</span> <span class="nx">start</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Check for whitespace on the current line.</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">chr</span> <span class="o">===</span> <span class="s1">&#39;\n&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stripSpace</span><span class="p">();</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Match the opening tag.</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">scanner</span><span class="p">.</span><span class="nx">scan</span><span class="p">(</span><span class="nx">tagRes</span><span class="p">[</span><span class="mi">0</span><span class="p">]))</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasTag</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC162'><br/></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the tag type.</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span> <span class="o">=</span> <span class="nx">scanner</span><span class="p">.</span><span class="nx">scan</span><span class="p">(</span><span class="nx">tagRe</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;name&#39;</span><span class="p">;</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scanner</span><span class="p">.</span><span class="nx">scan</span><span class="p">(</span><span class="nx">whiteRe</span><span class="p">);</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the tag value.</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;=&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">scanner</span><span class="p">.</span><span class="nx">scanUntil</span><span class="p">(</span><span class="nx">equalsRe</span><span class="p">);</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scanner</span><span class="p">.</span><span class="nx">scan</span><span class="p">(</span><span class="nx">equalsRe</span><span class="p">);</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scanner</span><span class="p">.</span><span class="nx">scanUntil</span><span class="p">(</span><span class="nx">tagRes</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;{&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">scanner</span><span class="p">.</span><span class="nx">scanUntil</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;\\s*&#39;</span> <span class="o">+</span> <span class="nx">escapeRegExp</span><span class="p">(</span><span class="s1">&#39;}&#39;</span> <span class="o">+</span> <span class="nx">tags</span><span class="p">[</span><span class="mi">1</span><span class="p">])));</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scanner</span><span class="p">.</span><span class="nx">scan</span><span class="p">(</span><span class="nx">curlyRe</span><span class="p">);</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scanner</span><span class="p">.</span><span class="nx">scanUntil</span><span class="p">(</span><span class="nx">tagRes</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">;</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">scanner</span><span class="p">.</span><span class="nx">scanUntil</span><span class="p">(</span><span class="nx">tagRes</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Match the closing tag.</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">scanner</span><span class="p">.</span><span class="nx">scan</span><span class="p">(</span><span class="nx">tagRes</span><span class="p">[</span><span class="mi">1</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Unclosed tag at &#39;</span> <span class="o">+</span> <span class="nx">scanner</span><span class="p">.</span><span class="nx">pos</span><span class="p">);</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">token</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">start</span><span class="p">,</span> <span class="nx">scanner</span><span class="p">.</span><span class="nx">pos</span> <span class="p">];</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">token</span><span class="p">);</span></div><div class='line' id='LC188'><br/></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;#&#39;</span> <span class="o">||</span> <span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;^&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sections</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">token</span><span class="p">);</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Check section nesting.</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">openSection</span> <span class="o">=</span> <span class="nx">sections</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">openSection</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Unopened section &quot;&#39;</span> <span class="o">+</span> <span class="nx">value</span> <span class="o">+</span> <span class="s1">&#39;&quot; at &#39;</span> <span class="o">+</span> <span class="nx">start</span><span class="p">);</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">openSection</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Unclosed section &quot;&#39;</span> <span class="o">+</span> <span class="nx">openSection</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot; at &#39;</span> <span class="o">+</span> <span class="nx">start</span><span class="p">);</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;name&#39;</span> <span class="o">||</span> <span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;{&#39;</span> <span class="o">||</span> <span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nonSpace</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;=&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set the tags for the next time around.</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tagRes</span> <span class="o">=</span> <span class="nx">escapeTags</span><span class="p">(</span><span class="nx">tags</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="nx">spaceRe</span><span class="p">));</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Make sure there are no open sections when we&#39;re done.</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">openSection</span> <span class="o">=</span> <span class="nx">sections</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">openSection</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Unclosed section &quot;&#39;</span> <span class="o">+</span> <span class="nx">openSection</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot; at &#39;</span> <span class="o">+</span> <span class="nx">scanner</span><span class="p">.</span><span class="nx">pos</span><span class="p">);</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">nestTokens</span><span class="p">(</span><span class="nx">squashTokens</span><span class="p">(</span><span class="nx">tokens</span><span class="p">));</span></div><div class='line' id='LC216'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC219'><span class="cm">   * Combines the values of consecutive text tokens in the given `tokens` array</span></div><div class='line' id='LC220'><span class="cm">   * to a single token.</span></div><div class='line' id='LC221'><span class="cm">   */</span></div><div class='line' id='LC222'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">squashTokens</span><span class="p">(</span><span class="nx">tokens</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">squashedTokens</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">token</span><span class="p">,</span> <span class="nx">lastToken</span><span class="p">;</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">token</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">token</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;text&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">lastToken</span> <span class="o">&amp;&amp;</span> <span class="nx">lastToken</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;text&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastToken</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">token</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastToken</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">=</span> <span class="nx">token</span><span class="p">[</span><span class="mi">3</span><span class="p">];</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">squashedTokens</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">token</span><span class="p">);</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastToken</span> <span class="o">=</span> <span class="nx">token</span><span class="p">;</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">squashedTokens</span><span class="p">;</span></div><div class='line' id='LC241'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC244'><span class="cm">   * Forms the given array of `tokens` into a nested tree structure where</span></div><div class='line' id='LC245'><span class="cm">   * tokens that represent a section have two additional items: 1) an array of</span></div><div class='line' id='LC246'><span class="cm">   * all tokens that appear in that section and 2) the index in the original</span></div><div class='line' id='LC247'><span class="cm">   * template that represents the end of that section.</span></div><div class='line' id='LC248'><span class="cm">   */</span></div><div class='line' id='LC249'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">nestTokens</span><span class="p">(</span><span class="nx">tokens</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">nestedTokens</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">collector</span> <span class="o">=</span> <span class="nx">nestedTokens</span><span class="p">;</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sections</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">token</span><span class="p">,</span> <span class="nx">section</span><span class="p">;</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">token</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC257'><br/></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;#&#39;</span><span class="o">:</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;^&#39;</span><span class="o">:</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collector</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">token</span><span class="p">);</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sections</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">token</span><span class="p">);</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collector</span> <span class="o">=</span> <span class="nx">token</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;/&#39;</span><span class="o">:</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">section</span> <span class="o">=</span> <span class="nx">sections</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">section</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span> <span class="o">=</span> <span class="nx">token</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collector</span> <span class="o">=</span> <span class="nx">sections</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">sections</span><span class="p">[</span><span class="nx">sections</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">][</span><span class="mi">4</span><span class="p">]</span> <span class="o">:</span> <span class="nx">nestedTokens</span><span class="p">;</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collector</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">token</span><span class="p">);</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC274'><br/></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">nestedTokens</span><span class="p">;</span></div><div class='line' id='LC276'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC279'><span class="cm">   * A simple string scanner that is used by the template parser to find</span></div><div class='line' id='LC280'><span class="cm">   * tokens in template strings.</span></div><div class='line' id='LC281'><span class="cm">   */</span></div><div class='line' id='LC282'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Scanner</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">string</span> <span class="o">=</span> <span class="nx">string</span><span class="p">;</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tail</span> <span class="o">=</span> <span class="nx">string</span><span class="p">;</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pos</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC286'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC287'><br/></div><div class='line' id='LC288'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC289'><span class="cm">   * Returns `true` if the tail is empty (end of string).</span></div><div class='line' id='LC290'><span class="cm">   */</span></div><div class='line' id='LC291'>&nbsp;&nbsp;<span class="nx">Scanner</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">eos</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">tail</span> <span class="o">===</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC293'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC296'><span class="cm">   * Tries to match the given regular expression at the current position.</span></div><div class='line' id='LC297'><span class="cm">   * Returns the matched text if it can match, the empty string otherwise.</span></div><div class='line' id='LC298'><span class="cm">   */</span></div><div class='line' id='LC299'>&nbsp;&nbsp;<span class="nx">Scanner</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">scan</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">re</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tail</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">re</span><span class="p">);</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">match</span> <span class="o">&amp;&amp;</span> <span class="nx">match</span><span class="p">.</span><span class="nx">index</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">string</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tail</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tail</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">string</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pos</span> <span class="o">+=</span> <span class="nx">string</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">string</span><span class="p">;</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC308'><br/></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC310'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC311'><br/></div><div class='line' id='LC312'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC313'><span class="cm">   * Skips all text until the given regular expression can be matched. Returns</span></div><div class='line' id='LC314'><span class="cm">   * the skipped string, which is the entire tail if no match can be made.</span></div><div class='line' id='LC315'><span class="cm">   */</span></div><div class='line' id='LC316'>&nbsp;&nbsp;<span class="nx">Scanner</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">scanUntil</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">re</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tail</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="nx">re</span><span class="p">),</span> <span class="nx">match</span><span class="p">;</span></div><div class='line' id='LC318'><br/></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="o">-</span><span class="mi">1</span><span class="o">:</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">match</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tail</span><span class="p">;</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tail</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">0</span><span class="o">:</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">match</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">match</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tail</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tail</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tail</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC331'><br/></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pos</span> <span class="o">+=</span> <span class="nx">match</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC333'><br/></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">match</span><span class="p">;</span></div><div class='line' id='LC335'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC338'><span class="cm">   * Represents a rendering context by wrapping a view object and</span></div><div class='line' id='LC339'><span class="cm">   * maintaining a reference to the parent context.</span></div><div class='line' id='LC340'><span class="cm">   */</span></div><div class='line' id='LC341'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Context</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="nx">parentContext</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">view</span> <span class="o">=</span> <span class="nx">view</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">?</span> <span class="p">{}</span> <span class="o">:</span> <span class="nx">view</span><span class="p">;</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cache</span> <span class="o">=</span> <span class="p">{</span> <span class="s1">&#39;.&#39;</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">view</span> <span class="p">};</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">parent</span> <span class="o">=</span> <span class="nx">parentContext</span><span class="p">;</span></div><div class='line' id='LC345'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC348'><span class="cm">   * Creates a new context using the given view with this context</span></div><div class='line' id='LC349'><span class="cm">   * as the parent.</span></div><div class='line' id='LC350'><span class="cm">   */</span></div><div class='line' id='LC351'>&nbsp;&nbsp;<span class="nx">Context</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">push</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">view</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">Context</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC353'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC354'><br/></div><div class='line' id='LC355'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC356'><span class="cm">   * Returns the value of the given name in this context, traversing</span></div><div class='line' id='LC357'><span class="cm">   * up the context hierarchy if the value is absent in this context&#39;s view.</span></div><div class='line' id='LC358'><span class="cm">   */</span></div><div class='line' id='LC359'>&nbsp;&nbsp;<span class="nx">Context</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">lookup</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">cache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC365'><br/></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;.&#39;</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">view</span><span class="p">;</span></div><div class='line' id='LC369'><br/></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">names</span> <span class="o">=</span> <span class="nx">name</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;.&#39;</span><span class="p">),</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">names</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">[</span><span class="nx">names</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">]];</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">view</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC377'><br/></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC379'><br/></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">parent</span><span class="p">;</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC385'><br/></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">view</span><span class="p">);</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC389'><br/></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC391'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC392'><br/></div><div class='line' id='LC393'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC394'><span class="cm">   * A Writer knows how to take a stream of tokens and render them to a</span></div><div class='line' id='LC395'><span class="cm">   * string, given a context. It also maintains a cache of templates to</span></div><div class='line' id='LC396'><span class="cm">   * avoid the need to parse the same template twice.</span></div><div class='line' id='LC397'><span class="cm">   */</span></div><div class='line' id='LC398'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Writer</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cache</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC400'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC401'><br/></div><div class='line' id='LC402'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC403'><span class="cm">   * Clears all cached templates in this writer.</span></div><div class='line' id='LC404'><span class="cm">   */</span></div><div class='line' id='LC405'>&nbsp;&nbsp;<span class="nx">Writer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clearCache</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cache</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC407'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC408'><br/></div><div class='line' id='LC409'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC410'><span class="cm">   * Parses and caches the given `template` and returns the array of tokens</span></div><div class='line' id='LC411'><span class="cm">   * that is generated from the parse.</span></div><div class='line' id='LC412'><span class="cm">   */</span></div><div class='line' id='LC413'>&nbsp;&nbsp;<span class="nx">Writer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">tags</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cache</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">cache</span><span class="p">;</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tokens</span> <span class="o">=</span> <span class="nx">cache</span><span class="p">[</span><span class="nx">template</span><span class="p">];</span></div><div class='line' id='LC416'><br/></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">tokens</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tokens</span> <span class="o">=</span> <span class="nx">cache</span><span class="p">[</span><span class="nx">template</span><span class="p">]</span> <span class="o">=</span> <span class="nx">parseTemplate</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">tags</span><span class="p">);</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC420'><br/></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">tokens</span><span class="p">;</span></div><div class='line' id='LC422'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC423'><br/></div><div class='line' id='LC424'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC425'><span class="cm">   * High-level method that is used to render the given `template` with</span></div><div class='line' id='LC426'><span class="cm">   * the given `view`.</span></div><div class='line' id='LC427'><span class="cm">   *</span></div><div class='line' id='LC428'><span class="cm">   * The optional `partials` argument may be an object that contains the</span></div><div class='line' id='LC429'><span class="cm">   * names and templates of partials that are used in the template. It may</span></div><div class='line' id='LC430'><span class="cm">   * also be a function that is used to load partial templates on the fly</span></div><div class='line' id='LC431'><span class="cm">   * that takes a single argument: the name of the partial.</span></div><div class='line' id='LC432'><span class="cm">   */</span></div><div class='line' id='LC433'>&nbsp;&nbsp;<span class="nx">Writer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">render</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">view</span><span class="p">,</span> <span class="nx">partials</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tokens</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">template</span><span class="p">);</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">context</span> <span class="o">=</span> <span class="p">(</span><span class="nx">view</span> <span class="k">instanceof</span> <span class="nx">Context</span><span class="p">)</span> <span class="o">?</span> <span class="nx">view</span> <span class="o">:</span> <span class="k">new</span> <span class="nx">Context</span><span class="p">(</span><span class="nx">view</span><span class="p">);</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">renderTokens</span><span class="p">(</span><span class="nx">tokens</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">partials</span><span class="p">,</span> <span class="nx">template</span><span class="p">);</span></div><div class='line' id='LC437'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC438'><br/></div><div class='line' id='LC439'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC440'><span class="cm">   * Low-level method that renders the given array of `tokens` using</span></div><div class='line' id='LC441'><span class="cm">   * the given `context` and `partials`.</span></div><div class='line' id='LC442'><span class="cm">   *</span></div><div class='line' id='LC443'><span class="cm">   * Note: The `originalTemplate` is only ever used to extract the portion</span></div><div class='line' id='LC444'><span class="cm">   * of the original template that was contained in a higher-order section.</span></div><div class='line' id='LC445'><span class="cm">   * If the template doesn&#39;t use higher-order sections, this argument may</span></div><div class='line' id='LC446'><span class="cm">   * be omitted.</span></div><div class='line' id='LC447'><span class="cm">   */</span></div><div class='line' id='LC448'>&nbsp;&nbsp;<span class="nx">Writer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">renderTokens</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">tokens</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">partials</span><span class="p">,</span> <span class="nx">originalTemplate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">buffer</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC450'><br/></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// This function is used to render an arbitrary template</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// in the current context by higher-order sections.</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">subRender</span><span class="p">(</span><span class="nx">template</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">partials</span><span class="p">);</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC457'><br/></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">token</span><span class="p">,</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">token</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC461'><br/></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;#&#39;</span><span class="o">:</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">lookup</span><span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">value</span><span class="p">)</span> <span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC466'><br/></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">jlen</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">jlen</span><span class="p">;</span> <span class="o">++</span><span class="nx">j</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">renderTokens</span><span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">4</span><span class="p">],</span> <span class="nx">context</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">[</span><span class="nx">j</span><span class="p">]),</span> <span class="nx">partials</span><span class="p">,</span> <span class="nx">originalTemplate</span><span class="p">);</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">renderTokens</span><span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">4</span><span class="p">],</span> <span class="nx">context</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">),</span> <span class="nx">partials</span><span class="p">,</span> <span class="nx">originalTemplate</span><span class="p">);</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">originalTemplate</span> <span class="o">!==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot use higher-order sections without the original template&#39;</span><span class="p">);</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC477'><br/></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Extract the portion of the original template that the section contains.</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">.</span><span class="nx">view</span><span class="p">,</span> <span class="nx">originalTemplate</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span> <span class="nx">token</span><span class="p">[</span><span class="mi">5</span><span class="p">]),</span> <span class="nx">subRender</span><span class="p">);</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">buffer</span> <span class="o">+=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">renderTokens</span><span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">4</span><span class="p">],</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">partials</span><span class="p">,</span> <span class="nx">originalTemplate</span><span class="p">);</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC485'><br/></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;^&#39;</span><span class="o">:</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">lookup</span><span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC489'><br/></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Use JavaScript&#39;s definition of falsy. Include empty arrays.</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// See https://github.com/janl/mustache.js/issues/186</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">value</span> <span class="o">||</span> <span class="p">(</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">renderTokens</span><span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">4</span><span class="p">],</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">partials</span><span class="p">,</span> <span class="nx">originalTemplate</span><span class="p">);</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC495'><br/></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;&gt;&#39;</span><span class="o">:</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">partials</span><span class="p">)</span> <span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">isFunction</span><span class="p">(</span><span class="nx">partials</span><span class="p">)</span> <span class="o">?</span> <span class="nx">partials</span><span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="o">:</span> <span class="nx">partials</span><span class="p">[</span><span class="nx">token</span><span class="p">[</span><span class="mi">1</span><span class="p">]];</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">buffer</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">renderTokens</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">value</span><span class="p">),</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">partials</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;&amp;&#39;</span><span class="o">:</span></div><div class='line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">lookup</span><span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">buffer</span> <span class="o">+=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span></div><div class='line' id='LC507'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">lookup</span><span class="p">(</span><span class="nx">token</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">buffer</span> <span class="o">+=</span> <span class="nx">mustache</span><span class="p">.</span><span class="nx">escape</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;text&#39;</span><span class="o">:</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span> <span class="o">+=</span> <span class="nx">token</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC515'><br/></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">buffer</span><span class="p">;</span></div><div class='line' id='LC517'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC518'><br/></div><div class='line' id='LC519'>&nbsp;&nbsp;<span class="nx">mustache</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="s2">&quot;mustache.js&quot;</span><span class="p">;</span></div><div class='line' id='LC520'>&nbsp;&nbsp;<span class="nx">mustache</span><span class="p">.</span><span class="nx">version</span> <span class="o">=</span> <span class="s2">&quot;0.8.1&quot;</span><span class="p">;</span></div><div class='line' id='LC521'>&nbsp;&nbsp;<span class="nx">mustache</span><span class="p">.</span><span class="nx">tags</span> <span class="o">=</span> <span class="p">[</span> <span class="s2">&quot;{{&quot;</span><span class="p">,</span> <span class="s2">&quot;}}&quot;</span> <span class="p">];</span></div><div class='line' id='LC522'><br/></div><div class='line' id='LC523'>&nbsp;&nbsp;<span class="c1">// All high-level mustache.* functions use this writer.</span></div><div class='line' id='LC524'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">defaultWriter</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Writer</span><span class="p">();</span></div><div class='line' id='LC525'><br/></div><div class='line' id='LC526'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC527'><span class="cm">   * Clears all cached templates in the default writer.</span></div><div class='line' id='LC528'><span class="cm">   */</span></div><div class='line' id='LC529'>&nbsp;&nbsp;<span class="nx">mustache</span><span class="p">.</span><span class="nx">clearCache</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">defaultWriter</span><span class="p">.</span><span class="nx">clearCache</span><span class="p">();</span></div><div class='line' id='LC531'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC532'><br/></div><div class='line' id='LC533'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC534'><span class="cm">   * Parses and caches the given template in the default writer and returns the</span></div><div class='line' id='LC535'><span class="cm">   * array of tokens it contains. Doing this ahead of time avoids the need to</span></div><div class='line' id='LC536'><span class="cm">   * parse templates on the fly as they are rendered.</span></div><div class='line' id='LC537'><span class="cm">   */</span></div><div class='line' id='LC538'>&nbsp;&nbsp;<span class="nx">mustache</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">tags</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">defaultWriter</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">tags</span><span class="p">);</span></div><div class='line' id='LC540'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC541'><br/></div><div class='line' id='LC542'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC543'><span class="cm">   * Renders the `template` with the given `view` and `partials` using the</span></div><div class='line' id='LC544'><span class="cm">   * default writer.</span></div><div class='line' id='LC545'><span class="cm">   */</span></div><div class='line' id='LC546'>&nbsp;&nbsp;<span class="nx">mustache</span><span class="p">.</span><span class="nx">render</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">view</span><span class="p">,</span> <span class="nx">partials</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">defaultWriter</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">view</span><span class="p">,</span> <span class="nx">partials</span><span class="p">);</span></div><div class='line' id='LC548'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC549'><br/></div><div class='line' id='LC550'>&nbsp;&nbsp;<span class="c1">// This is here for backwards compatibility with 0.4.x.</span></div><div class='line' id='LC551'>&nbsp;&nbsp;<span class="nx">mustache</span><span class="p">.</span><span class="nx">to_html</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">view</span><span class="p">,</span> <span class="nx">partials</span><span class="p">,</span> <span class="nx">send</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">mustache</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">view</span><span class="p">,</span> <span class="nx">partials</span><span class="p">);</span></div><div class='line' id='LC553'><br/></div><div class='line' id='LC554'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">send</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">send</span><span class="p">(</span><span class="nx">result</span><span class="p">);</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC559'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC560'><br/></div><div class='line' id='LC561'>&nbsp;&nbsp;<span class="c1">// Export the escaping function so that the user may override it.</span></div><div class='line' id='LC562'>&nbsp;&nbsp;<span class="c1">// See https://github.com/janl/mustache.js/issues/244</span></div><div class='line' id='LC563'>&nbsp;&nbsp;<span class="nx">mustache</span><span class="p">.</span><span class="nx">escape</span> <span class="o">=</span> <span class="nx">escapeHtml</span><span class="p">;</span></div><div class='line' id='LC564'><br/></div><div class='line' id='LC565'>&nbsp;&nbsp;<span class="c1">// Export these mainly for testing, but also for advanced usage.</span></div><div class='line' id='LC566'>&nbsp;&nbsp;<span class="nx">mustache</span><span class="p">.</span><span class="nx">Scanner</span> <span class="o">=</span> <span class="nx">Scanner</span><span class="p">;</span></div><div class='line' id='LC567'>&nbsp;&nbsp;<span class="nx">mustache</span><span class="p">.</span><span class="nx">Context</span> <span class="o">=</span> <span class="nx">Context</span><span class="p">;</span></div><div class='line' id='LC568'>&nbsp;&nbsp;<span class="nx">mustache</span><span class="p">.</span><span class="nx">Writer</span> <span class="o">=</span> <span class="nx">Writer</span><span class="p">;</span></div><div class='line' id='LC569'><br/></div><div class='line' id='LC570'><span class="p">}));</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04493s from github-fe124-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/janl/mustache.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

