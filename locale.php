<?php

$locale_de = array(
    'loading' => 'Laden...',
    'welcome' => 'Willkommen {0}!',

    'buttons' => array(
        'action' => 'Aktion'
    ),

    'fields' => array(
        'name' => 'Rekord Name',
        'col1' => 'Spalte 1',
        'col2' => 'Spalte 2'
    ),

    'columnHeaders' => array(
        'name' => 'Rekord Name',
        'col1' => 'Spalte 1',
        'col2' => 'Spalte 2'
    ),

    'titles' => array(
        'AppForm' => 'Generischer Form Systemsteuerung',
        'AppGrid' => 'Daten Gitter'
    )
);

$locale_en = array(
    'loading' => 'Loading...',
    'welcome' => 'Welcome {0}',

    'buttons' => array(
        'action' => 'Action'
    ),

    'fields' => array(
        'name' => 'Record Name',
        'col1' => 'Column 1',
        'col2' => 'Column 2'
    ),

    'columnHeaders' => array(
        'name' => 'Record Name',
        'col1' => 'Column 1',
        'col2' => 'Column 2'
    ),

    'titles' => array(
        'AppForm' => 'Generic Form Panel',
        'AppGrid' => 'Data Grid'
    )
);

$locale_es = array(
    'loading' => 'De carga...',
    'welcome' => 'Bienvenida {0}!',

    'buttons' => array(
        'action' => 'Acción'
    ),

    'fields' => array(
        'name' => 'Registro de Nombres de',
        'col1' => 'Columna 1',
        'col2' => 'Columna 2'
    ),

    'columnHeaders' => array(
        'name' => 'Record Name',
        'col1' => 'Columna 1',
        'col2' => 'Columna 2'
    ),

    'titles' => array(
        'AppForm' => 'Panel de Forma Genérica',
        'AppGrid' => 'Datos Tabla'
    )
);

switch($_REQUEST['language']) {
    case 'de' :
        $locale = $locale_de;
        break;
    case 'en' :
        $locale = $locale_en;
        break;
    case 'es' :
        $locale = $locale_es;
        break;
}

sleep(5);

echo json_encode($locale);

?>