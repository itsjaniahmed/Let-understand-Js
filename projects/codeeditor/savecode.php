<?php 
if ($_POST['submit']) {

    $html = $_POST['html'];
    $css = $_POST['css'];
    $js = $_POST['js'];

    $myfile = fopen("code.html", "w") or die("Unable to open file!");
    $code = "<html><head> <style>".$css."</style></head><body>".$html."<script>".$js."</script></body></html>" ;
    fwrite($myfile, $code);

    fclose($myfile);


$file="code.html";
    if (file_exists($file)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="'.basename($file).'"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($file));
        readfile($file);
        exit;
    }

    
?>



<?php  



}