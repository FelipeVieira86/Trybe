const estados = document.getElementById('estados');

function geraEstados() {
  const array = [
    '',
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ];
  for (let i = 0; i < array.length; i++) {
    let opt = document.createElement('option');
    estados.appendChild(opt);
    opt.innerText = array[i];
    opt.value = array[i];
  }
}
geraEstados();
const consolida = document.getElementById('consolidado');
const campoNome = document.getElementById('name');
const campoEmail = document.getElementById('email');
const campoCPF = document.getElementById('cpf');
const campoAdress = document.getElementById('adress');
const campoCidade = document.getElementById('cidade');
const campoEstado = document.getElementById('estados');
const campoTipoCasa = document.getElementById('tipoCasa');
const campoTipoAp = document.getElementById('tipoAp');
const curriculum = document.getElementById('curriculum');
const cargo = document.getElementById('cargo');
const descCargo = document.getElementById('descCargo');
const dataInicio = document.getElementById('datainicio');
const arrayCampos = [
  campoNome,
  campoEmail,
  campoCPF,
  campoAdress,
  campoCidade,
  campoEstado,
  campoTipoCasa,
  campoTipoAp,
  curriculum,
  cargo,
  descCargo,
  dataInicio,
];

const botaoSubmit = document.getElementById('submit');


const botaoCancel = document.getElementById('cancel');
botaoCancel.addEventListener('click', function () {
  for (let index = 0; index < arrayCampos.length; index++) {
    if (arrayCampos[index].type == 'radio') {
      if (arrayCampos[index].checked) {
        arrayCampos[index].checked = false;
      }
    }
    arrayCampos[index].value = '';
  }
});

if ($('html').hasClass('no-touch')) {
  var $input, $btn;
  $('.date-wrapper').each(function (index) {
    $input = $(this).find('input');
    $btn = $(this).find('.calendar-btn');
    $input.attr('type', 'text');
    var pickerStart = new Pikaday({
      field: $input[0],
      trigger: $btn[0],
      container: $(this)[0],
      format: 'DD/MM/YYYY',
      firstDay: 1,
    });
    $btn.show();
  });
} else {
  $('.date-wrapper input').attr('type', 'date');
  $('.calendar-btn').hide();
}
validation.init();