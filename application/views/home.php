<?php 
	$this->load->view('template/header');
	$this->load->view('template/nav');
 ?>

<div class="row">
	<div class="col-xs-12 col-sm-12 col-md-12  text-center">
	<h1><?=lang('my_electives')?></h1>
	</div>
	<br><br>
	<div class="col-xs-10 col-sm-10 col-md-10 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
		<table class="table responsive dt-center" id="table-my-elctives" width="100%">
			<thead>
				<tr>
					<th>
						<?=lang('electives')?>
					</th>
					<th>
						<?=lang('description')?>
					</th>
					<th>
						<?=lang('teacher')?>
					</th>
					<th>
						<?=lang('quotes')?>
					</th>
					<th>
						<?=lang('notes')?>
					</th>
					
				</tr>
			</thead>
			<tbody>
				
			</tbody>
		</table>
	</div>
	
</div>
<br><br>

<br><br>
<div class="row hidden-lg">
	<div class="col-xs-12 col-sm-12 col-md-12  visible-xs-block visible-lg-block text-center">
		<a type="button" class="btn btn-primary btn-lg " href="<?= site_url('electives')?>"><?= lang('electives')?></a>
	</div>
</div>

<input type="hidden" value="<?=$uid?>" id="uid">
<script src="<?= $controller_js ?>" ></script>