<?php $this->load->view('template/header'); 
echo $style;
?>
<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 ">
				
					<div class="col-xs-5 col-sm-4 col-md-5  ">
						<div class="col-xs-12 col-sm-12 col-md-12  ">
							<img src="<?= base_url('assets/img/logo.png') ?>" class="img-responsive " alt="Responsive image ">
						</div>
					</div>
					<div class="col-xs-7  col-sm-8 col-md-7 text-center " >
						<h1><?= lang('title')?> </h1>
					</div>
				
				
				
			</div>
		</div>
		<br>
    	<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 ">
				<div class="panel panel-login">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-6">
								<a href="#" class="active" id="login-form-link"><?= lang('login')?></a>
							</div>
							<div class="col-xs-6">
								<a href="#" id="register-form-link"><?= lang('register')?></a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
								<form id="login-form" action="" method="post" role="form" style="display: block;">
									<div class="form-group">
										<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="<?= lang('email')?>" value="">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="<?= lang('password')?>">
									</div>
									<div class="form-group">										
									<select class="form-control " id="language" >
										<option selected="" disabled=""><?= lang('language')?></option>
										  <option value="spanish"><?= lang('spanish')?></option>
										  <option value="english"><?= lang('english')?></option>
										</select>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit"  id="login-submit" tabindex="4" class="form-control btn btn-login" value="<?= lang('login_in')?>">
											</div>
										</div>
									</div>
									
								</form>
								<form id="register-form" action="" method="post" role="form" style="display: none;">
									<div class="form-group">
										<input type="text" name="username_register" id="username_register" pattern=".{6,100}"   title="<?=lang('min_character')?>"  class="form-control" placeholder="<?= lang('name')?>"  value=""  required>
									</div>
									<div class="form-group">
										<input type="email" name="email_register"  id="email_register" tabindex="1" class="form-control" placeholder="<?= lang('email')?>" required value="">
									</div>
									<div class="form-group">
										<input type="password" name="password_register" id="password_register" pattern=".{6,}" title="<?=lang('min_character')?>" tabindex="2" required class="form-control" placeholder="<?= lang('password')?>">
									</div>
									<div class="form-group">
										<input type="password"  name="confirm_password" id="confirm_password"  tabindex="2"  class="form-control" placeholder="<?= lang('confirm_password')?>" data-container="body" data-toggle="popover" data-placement="top" data-content="<?= lang('error_password')?>">
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="<?= lang('register_now')?>">
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<input type="hidden" id="lang" value="<?= $language?>">
	<input type="hidden" value="<?=site_url()?>" id="base">
	<script src="<?= base_url('assets/js/auth.js') ?>" ></script>
	
	
</body>
	
  
</html>