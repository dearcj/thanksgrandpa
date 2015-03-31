<?php
header("Content-Type: application/json; encoding=utf-8");

$secret_key = 'qV6RXByT51TBnwGZX8Py'; // Защищенный ключ приложения

$input = $_POST;

// Проверка подписи
$sig = $input['sig'];
unset($input['sig']);
ksort($input);
$str = '';
foreach ($input as $k => $v) {
  $str .= $k.'='.$v;
}

error_log(http_build_query ($input), 3 ,"/var/tmp/my-errors.log");

if ($sig != md5($str.$secret_key)) {
  $response['error'] = array(
    'error_code' => 10,
    'error_msg' => 'Несовпадение вычисленной и переданной подписи запроса.',
    'critical' => true
  );
} else {
 $item = $input['item']; // наименование товара
	
  switch ($input['notification_type']) {
    case 'get_item':
      $item = $input['item'];
	  
	if($item == 'item1') {
        $response['response'] = array(
          'item_id' => 611,
          'title' => '100 монет',
          'photo_url' => 'https://pp.vk.me/c624525/v624525259/1745c/uEvOX2oEj2E.jpg',
          'price' => 3
        );
      }
      elseif ($item == 'item2') {
        $response['response'] = array(
          'item_id' => 612,
          'title' => '1200 монет',
          'photo_url' => 'https://pp.vk.me/c624525/v624525259/1745c/uEvOX2oEj2E.jpg',
          'price' => 10
        );
      }
      elseif ($item == 'item3') {
               $response['response'] = array(
                 'item_id' => 613,
                 'title' => '7000 монет',
                 'photo_url' => 'https://pp.vk.me/c624525/v624525259/1745c/uEvOX2oEj2E.jpg',
                 'price' => 50
               );
             }
      elseif ($item == 'item4') {
                     $response['response'] = array(
                       'item_id' => 711,
                       'title' => '3 звезд',
                       'photo_url' => 'https://pp.vk.me/c624525/v624525259/173bd/0Mux0DXYDzU.jpg',
                       'price' => 3
                     );}
      elseif ($item == 'item5') {
                           $response['response'] = array(
                             'item_id' => 712,
                             'title' => '15 звезд',
                             'photo_url' => 'https://pp.vk.me/c624525/v624525259/173bd/0Mux0DXYDzU.jpg',
                             'price' => 10
                           );}
      elseif ($item == 'item6') {
                                 $response['response'] = array(
                                   'item_id' => 713,
                                   'title' => '80 звезд',
                                   'photo_url' => 'https://pp.vk.me/c624525/v624525259/173bd/0Mux0DXYDzU.jpg',
                                   'price' => 50);
      }
      elseif ($item == 'item7') {
                                     $response['response'] = array(
                                       'item_id' => 714,
                                       'title' => '1 энергия',
                                       'photo_url' => 'https://pp.vk.me/c622718/v622718259/265bd/SBrOAe2sxnE.jpg',
                                       'price' => 2);
          }
           else {
        $response['error'] = array(
          'error_code' => 20,
          'error_msg' => 'Товара не существует.',
          'critical' => true
        );
      }
      break;

case 'get_item_test':
      // Получение информации о товаре в тестовом режиме
      $item = $input['item'];
     if ($item == 'item1') {
            $response['response'] = array(
              'item_id' => 601,
              'title' => '100 монет',
              'photo_url' => 'https://pp.vk.me/c624525/v624525259/1745c/uEvOX2oEj2E.jpg',
              'price' => 3
            );
          }
          elseif ($item == 'item2') {
            $response['response'] = array(
              'item_id' => 602,
              'title' => '1200 монет',
              'photo_url' => 'https://pp.vk.me/c624525/v624525259/1745c/uEvOX2oEj2E.jpg',
              'price' => 10
            );
          }
          elseif ($item == 'item3') {
                   $response['response'] = array(
                     'item_id' => 603,
                     'title' => '7000 монет',
                     'photo_url' => 'https://pp.vk.me/c624525/v624525259/1745c/uEvOX2oEj2E.jpg',
                     'price' => 50
                   );
                 }
          elseif ($item == 'item4') {
                         $response['response'] = array(
                           'item_id' => 701,
                           'title' => '3 звезд',
                           'photo_url' => 'https://pp.vk.me/c624525/v624525259/173bd/0Mux0DXYDzU.jpg',
                           'price' => 3
                         );}
          elseif ($item == 'item5') {
                               $response['response'] = array(
                                 'item_id' => 702,
                                 'title' => '15 звезд',
                                 'photo_url' => 'https://pp.vk.me/c624525/v624525259/173bd/0Mux0DXYDzU.jpg',
                                 'price' => 10
                               );}
          elseif ($item == 'item6') {
                                     $response['response'] = array(
                                       'item_id' => 703,
                                       'title' => '80 звезд',
                                       'photo_url' => 'https://pp.vk.me/c624525/v624525259/173bd/0Mux0DXYDzU.jpg',
                                       'price' => 50);
          }
          elseif ($item == 'item7') {
            $response['response'] = array(
            'item_id' => 704,
            'title' => '1 энергия',
            'photo_url' => 'https://pp.vk.me/c622718/v622718259/265bd/SBrOAe2sxnE.jpg',
            'price' => 2);
                     }else {
        $response['error'] = array(
          'error_code' => 20,
          'error_msg' => 'Товара не существует.',
          'critical' => true
        );
      }
      break;

case 'order_status_change':
      // Изменение статуса заказа
      if ($input['status'] == 'chargeable') {
        $order_id = intval($input['order_id']);

        $app_order_id = 1; // Получающийся у вас идентификатор заказа.


$response['response'] = array(
          'order_id' => $order_id,
          'app_order_id' => $app_order_id,
        );
      } else {
        $response['error'] = array(
          'error_code' => 100,
          'error_msg' => 'Передано непонятно что вместо chargeable.',
          'critical' => true
        );
      }
      break;

case 'order_status_change_test':
      // Изменение статуса заказа в тестовом режиме
      if ($input['status'] == 'chargeable') {
        $order_id = intval($input['order_id']);

$app_order_id = 1; // Тут фактического заказа может не быть - тестовый режим.

	$response['response'] = array(
          'order_id' => $order_id,
          'app_order_id' => $app_order_id,
        );
      } else {
        $response['error'] = array(
          'error_code' => 100,
          'error_msg' => 'Передано непонятно что вместо chargeable.',
          'critical' => true
        );
      }
      break;
  }
}

echo json_encode($response);
?>