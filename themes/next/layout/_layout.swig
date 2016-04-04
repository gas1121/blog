<!doctype html>

{% set html_class = 'theme-next ' + theme.scheme %}
{% if theme.use_motion %}
  {% set html_class = html_class + ' use-motion' %}
{% endif %}

<html class="{{ html_class | lower }}">
<head>
  {% include '_partials/head.swig' %}
  <title>{% block title %}{% endblock %}</title>
</head>

<body itemscope itemtype="http://schema.org/WebPage" lang="{{ config.language }}">

  {% include '_scripts/third-party/analytics.swig' %}

  {% set container_class = "container one-collumn " %}
  {% if theme.sidebar.position %}
    {% set container_class = container_class + 'sidebar-position-' + theme.sidebar.position %}
  {% endif %}

  <div class="{{ container_class }} {% block page_class %}{% endblock %} ">
    <div class="headband"></div>

    <header id="header" class="header" itemscope itemtype="http://schema.org/WPHeader">
      <div class="header-inner"> {%- include '_partials/header.swig' %} </div>
    </header>

    <main id="main" class="main">
      <div class="main-inner">
        <div class="content-wrap">
          <div id="content" class="content">
            {% block content %}{% endblock %}
          </div>
          {% include '_partials/duoshuo-hot-articles.swig' %}
          {% include '_partials/comments.swig' %}
        </div>
        {% if theme.sidebar !== 'remove' %}
          {% block sidebar %}{% endblock %}
        {% endif %}
      </div>
    </main>

    <footer id="footer" class="footer">
      <div class="footer-inner">
        {% include '_partials/footer.swig' %}
      </div>
    </footer>

    <div class="back-to-top">
      <i class="fa fa-arrow-up"></i>
    </div>
    {# netease cloud music #}
    {% if theme.netease_cloud_music %}
      <div id="netease-cloud-music">
        {# <embed src="http://music.163.com/style/swf/widget.swf?sid=133104594&type=0&auto=1&width=310&height=430" width="330" height="450"  allowNetworking="all"></embed> #}
        <iframe id="netease-cloud-music-player" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="http://music.163.com/outchain/player?type=0&id=133104594&auto=1&height=430"></iframe>
      </div>
    {% endif %}
  </div>

  {% include '_scripts/vendors.swig' %}
  {% include '_scripts/commons.swig' %}

  {% set scheme_script = '_scripts/schemes/' + theme.scheme | lower + '.swig' %}
  {% include scheme_script %}

  {% block script_extra %}{% endblock %}

  {% include '_scripts/boostrap.swig' %}

  {% include '_scripts/third-party/comments.swig' %}
  {% include '_scripts/third-party/tinysou.swig' %}
  {% include '_scripts/third-party/localsearch.swig' %}
  {% include '_scripts/third-party/mathjax.swig' %}
  {% include '_scripts/third-party/lean-analytics.swig' %}
  {% include '_scripts/baidu-push.swig' %}
  
  {% if theme.spa_mode %}
    {# single page app support #}
    <script type="text/javascript" src="http://cdn.bootcss.com/page.js/1.6.4/page.js" charset="utf-8"></script>
    <script type="text/javascript" src="http://cdn.bootcss.com/vue/1.0.17/vue.js" charset="utf-8"></script>
    <script type="text/javascript" src="http://cdn.bootcss.com/vue-router/0.7.11/vue-router.js" charset="utf-8"></script>
    <script type="text/javascript" src="http://cdn.bootcss.com/vue-resource/0.7.0/vue-resource.js" charset="utf-8"></script>
    {# post-details spa support #}    
    <script type="text/javascript" src="{{ url_for(theme.js) }}/src/scrollspy.js?v={{ theme.version }}"></script>
    <script type="text/javascript" src="{{ url_for(theme.js) }}/custom/post-details.js" charset="utf-8"></script>    
    <script type="text/javascript" src="{{ url_for(theme.js) }}/custom/main.js" charset="utf-8"></script>
  {% endif %}
</body>
</html>
