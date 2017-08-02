<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Electives extends CI_Controller {	
	
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
		
		
		$data['title'] = lang('electives');
		$data['controller_js'] = base_url('assets/js/electives.js');
		$this->load->view('elective/electives',$data);
		$this->load->view('template/footer');

	}


	public function students($id)
	{
		$data['title'] = lang('students');
		$data['controller_js'] = base_url('assets/js/students.js');
		$data['elective'] = $id;
		$this->load->view('elective/students',$data);
		$this->load->view('template/footer');
	}

	
}