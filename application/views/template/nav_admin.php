
  <nav class="navbar navbar-default navbar-fixed-top col-xs-12 col-sm-12 col-md-12 " style="background-color: #49494e;">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"  id="collapse" aria-expanded="false" >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <h4 class="navbar-text"><?=lang('admin')?></h4>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav">
          
        </ul>
        
        <ul class="nav navbar-nav navbar-right ">
          <li><a href="<?= site_url('login/logout')?>""><?= lang('logout')?></a></li>
          
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>



<script type="text/javascript">
  $("#collapse").click(function(event) {
    
      $('#navbar-collapse').collapse('show');
      $('#navbar-collapse').collapse('hide');
    
  });
</script>