<?php

function cleanInput($input) {
 
    $search = array(
        '@<script[^>]*?>.*?</script>@si',   // Strip out javascript
        '@<[\/\!]*?[^<>]*?>@si',            // Strip out HTML tags
        '@<style[^>]*?>.*?</style>@siU',    // Strip style tags properly
        '@<![\s\S]*?--[ \t\n\r]*>@'         // Strip multi-line comments
    );
 
    $output = preg_replace($search, '', $input);
    return strip_tags($output); // remove any remaining html and PHP script tags
}

function sanitize($input) {
    if (is_array($input)) {
        foreach($input as $var=>$val) {
            $output[$var] = sanitize($val);
        }
    }
    else {
        if (get_magic_quotes_gpc()) {
            $input = stripslashes($input);
        }
        $input  = cleanInput($input);
        $output = $input;
    }
    return $output;
}

$css_file = '../../css/theme/theme.css';
$process = fopen($css_file, 'w') or die('Cannot open file:  '.$css_file);
$data = sanitize($_POST["text"]);
fwrite($process, $data);
fclose($process);


?>
