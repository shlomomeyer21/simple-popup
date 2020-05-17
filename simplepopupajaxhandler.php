<?php
abstract class AJAXHandler
{
    abstract public function handleGET();

    abstract public function handlePOST();

    public function handleRequest()
    {


        switch ($_SERVER['REQUEST_METHOD']) {
           case 'POST':
                  $this->handlePOST();
                 break;
           case 'GET':
                  $this->handleGET();
                 break;
         }
    }

}

class SimplePopupAJAXHandler extends AJAXHandler
{
    public function handlePOST()
    {
        //no implementation
    }

    public function handleGET()
    {
        echo "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Morbi leo urna molestie at elementum eu facilisis sed odio. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. At imperdiet dui accumsan sit amet. Orci sagittis eu volutpat odio facilisis mauris sit. Lacus suspendisse faucibus interdum posuere lorem ipsum. Neque vitae tempus quam pellentesque nec nam aliquam. Ante in nibh mauris cursus. Nunc sed id semper risus. Molestie nunc non blandit massa enim nec dui nunc. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Dui sapien eget mi proin. Turpis massa sed elementum tempus egestas. Adipiscing tristique risus nec feugiat in.";
    }
}


$handler = new SimplePopupAJAXHandler();
$handler->handleRequest();
?>
