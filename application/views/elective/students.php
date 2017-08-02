<?php 
	$this->load->view('template/header');
	$this->load->view('template/nav');
 ?>

<div class="row">
	<div class="col-xs-12 col-sm-12 col-md-12  text-center">
	<h1><?=lang('students')?></h1>
	</div>
	<br><br>
	<div class="col-xs-10 col-sm-10 col-md-10 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
		<table class="table responsive dt-center" id="students" width="100%">
			<thead>
				<tr>
					<th>
						#
					</th>
					<th>
						<?=lang('name')?>
					</th>
					<th>
						<?=lang('email')?>
					</th>					
					
				</tr>
			</thead>
			<tbody>
				
			</tbody>
		</table>
	</div>
	
</div>
<br><br>
<div class="row hidden-lg">
	<div class="col-xs-12 col-sm-12 col-md-12  visible-xs-block visible-lg-block text-center">		<a type="button" class="btn btn-primary btn-lg" href="<?= site_url('electives')?>"><?= lang('electives')?></a>
	</div>
</div>

<input type="hidden" value="<?=$elective?>" id="elective">
<script src="<?= $controller_js ?>" ></script>