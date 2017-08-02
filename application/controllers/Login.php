<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	

	public function index($language = null)
	{		

		$data['title'] = lang('login');
		$data['style'] = '<link rel="stylesheet" type="text/css" href="'. base_url('assets/css/style_login.css') .'">';
		if ($language) {
			$data['language'] = $language;
		}else{
			$data['language'] = "spanish";
		}
		
		$this->load->view('login',$data);

	}

	public function login_in()
	{
		$url = "admin";
		$user = array(
		    'name'  => $this->input->post('name'),
		    'email' => $this->input->post('email'),
		    'rol' => $this->input->post('rol'),
		    'lang' => $this->input->post('language'),
		    'uid' => $this->input->post('uid'),
		);

		$this->session->set_userdata($user);
		if ($user["rol"] == "student") {
			$url = "home";
		}
		echo json_encode($url);
	}

	public function logout()
	{
		session_destroy();
		redirect('Login','refresh');
	}


	public function language($language)
	{
		$this->session->set_flashdata('language', $language);
		$this->lang->load('language', $this->session->flashdata('language'));
		$this->index($language);	
	}
}
