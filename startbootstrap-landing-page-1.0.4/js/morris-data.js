$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '01/10 - 03/10',
            receita: 1513.74,
            despesa: 718.06
        }, {
            period: '04/10 - 10/10',
            receita: 3532.06,
            despesa: 1675.48
        }, {
            period: '11/10 - 17/10',
            receita: 3532.06,
            despesa: 1675.48
        }, {
            period: '18/10 - 24/10',
            receita: 3532.06,
            despesa: 1675.48
        }, {
            period: '25/10 - 31/10',
            receita: 3532.06,
            despesa: 1675.48
        }],
        xkey: 'period',
        ykeys: ['receita', 'despesa'],
        labels: ['Receita', 'Despesa'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Funcionarios",
            value: 3150.0
        }, {
            label: "Fornecedores",
            value: 2000.0
        }, {
            label: "Conta de Luz",
            value: 500.00
        }, {
            label: "Conta de Água",
            value: 270.0
        }, {
            label: "Aluguel",
            value: 1500.0
        }],
        resize: true
    });
 // 7420
 
 //15641,96
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '08/10',
            a: 250.0,
            b: 300.0
        }, {
            y: '09/10',
            a: 70.0,
            b: 50.0
        }, {
            y: '10/10',
            a: 180.5,
            b: 399.99
        }, {
            y: '11/10',
            a: 60.00,
            b: 250.00
        }, {
            y: '12/10',
            a: 300.00,
            b: 1000.00
        }, {
            y: '13/10',
            a: 500.00, 
            b: 300.00
        }, {
            y: '14/10',
            a: 99.99, 
            b: 150.0
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Vendas Físicas', 'Vendas Onlines'],
        hideHover: 'auto',
        resize: true
    });

});
