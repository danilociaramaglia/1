<?php

// Users data
$imSettings['access']['users'] = array(
	'admin' => array(
		'id' => 'qey4315a',
		'groups' => array('um9j38wo'),
		'firstname' => 'Admin',
		'lastname' => '',
		'email' => 'admin',
		'password' => '$2a$11$J6WSP6SpwC3G5KCYO5pJkuym3xC17Iv5oqC2Y7fDMlrWcWlji.J5K',
		'crypt_encoding' => 'csharp_bcrypt',
		'db_stored' => false,
		'page' => 'index.html'
	),
	'nuovoutente' => array(
		'id' => 'vu5n7e32',
		'groups' => array('zxeirtso'),
		'firstname' => 'NuovoUtente',
		'lastname' => '',
		'email' => 'nuovoutente',
		'password' => '$2a$11$XwrkcrN1JOmP7naPx41xQuVLaa6Drn61XXoWEJUJqUX0kjfSFxDuG',
		'crypt_encoding' => 'csharp_bcrypt',
		'db_stored' => false,
		'page' => 'index.html'
	)
);

// Admins list
$imSettings['access']['admins'] = array('qey4315a');

// Page/Users permissions
$imSettings['access']['pages'] = array();

// PASSWORD CRYPT

$imSettings['access']['password_crypt'] = array(
	'encoding_id' => 'php_default',
	'encodings' => array(
		'no_crypt' => array(
			'encode' => function ($pwd) { return $pwd; },
			'check' => function ($input, $encoded) { return $input == $encoded; }
		),
		'php_default' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_DEFAULT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		),
		'csharp_bcrypt' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_BCRYPT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		)
	)
);

// End of file access.inc.php