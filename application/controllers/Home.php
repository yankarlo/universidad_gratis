<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {	
	
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
		$data['title'] = lang('home');
		$data['controller_js'] = base_url('assets/js/home.js');
		$data['uid'] = $this->session->userdata('uid');
		$this->load->view('home',$data);
		$this->load->view('template/footer');

	}

	
}
