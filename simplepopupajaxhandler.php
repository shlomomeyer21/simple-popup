<?php
abstract class AJAXHandler
{
public function handleRequest()
{
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $this->handlePOST();
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET')
{
    $this->handleGET();
}
}
abstract public function handleGET();
abstract public function handlePOST();
}

class SimplePopupAJAXHandler extends AJAXHandler
{

public function __construct()
{

}

public function handlePOST()
{
//Do nothing
echo "";
}

public function handleGET()
{
echo "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
}


$handler = new SimplePopupAJAXHandler();
$handler->handleRequest();
