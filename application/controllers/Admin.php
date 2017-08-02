<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {	
	
	public function __construct()
	{
		parent::__construct();
		//Do your magic here
		if ($this->session->userdata('name') == null) {
			redirect('login','refresh');
		}
		$this->lang->load('language', $this->session->userdata('lang'));
	}

	public function index()
	{
		
		
		$data['title'] = lang('admin');
		$data['controller_js'] = base_url('assets/js/admin.js');
		$this->load->view('admin/home',$data);
		$this->load->view('template/footer');

	}

	

	

	
}