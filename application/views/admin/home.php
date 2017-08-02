<?php 
	$this->load->view('template/header');
	$this->load->view('template/nav_admin');
 ?>

 <div class="row">
	<div class="col-xs-12 col-sm-12 col-md-12  text-center">
	<h1><?=lang('electives')?></h1>
	</div>
	<div class="row ">
		<div class="col-xs-10 col-sm-10 col-md-10 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 text-right">
			<button type="button" class="btn btn-muted btn-lg" id="add" data-toggle="modal" language="<?=lang('add')?>"" data-target="#myModal"><?=lang('add')?></button>
			
		</div>
	</div>
	<br>
	<div class="col-xs-10 col-sm-10 col-md-10 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
		<table class="table responsive dt-center" id="table-electives" width="100%">
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
						<?=lang('quotes')." ".lang('free')?>
					</th>
					<th>
						<?=lang('state')?>
					</th>
					<th>
						<?=lang('edit')?>
					</th>
					<th>
						<?=lang('delete')?>
					</th>
				</tr>
			</thead>
			<tbody>
				
			</tbody>
		</table>
	</div>
	
</div>


<div class="modal fade col-xs-12 col-sm-12 col-md-12" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  	<div class="modal-dialog" role="document">
    	<div class="modal-content">
	    	<form id="form" action="" method="post" role="form" >
		      	<div class="modal-header">
		        	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        	<h3 class="modal-title text-center" id="myTitle"></h3>
	      		</div>
	  			<div class="modal-body">
		        	
						<div class="form-group">
							<input type="text" name="name_elective" id="name_elective" pattern=".{6,100}"   title="<?=lang('min_character')?>"  class="form-control" placeholder="<?= lang('elective_name')?>"  value=""  required>
						</div>
						<div class="form-group">
							<textarea class="form-control" rows="3" placeholder="<?= lang('description')?>" name="description_elective"  id="description_elective" required pattern=".{20,}"></textarea>
						</div>
						<div class="form-group">
							<input type="text" name="teacher_elective" id="teacher_elective" pattern=".{3,}" title="<?=lang('min_character')?>" tabindex="2" required class="form-control" placeholder="<?= lang('teacher')?>">
						</div>
						<div class="form-group">
							<input type="number"  name="quota_elective" id="quota_elective"  tabindex="2"  class="form-control" placeholder="<?= lang('quotes')?>" >
							<input type="hidden" id="used_elective" name="used_elective">
							<input type="hidden" id="id_elective" name="id_elective">
						</div>
					
	      		</div>
	      		<div class="modal-footer">
		        	<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		        	<button type="submit" class="btn btn-primary" id="button_submit"><?=lang('edit')?></button>
	      		</div>
      		</form>
    	</div>
  	</div>
</div>
<input type="hidden" id="edit" value="<?=lang('edit')?>">
<script src="<?= $controller_js ?>" ></script>