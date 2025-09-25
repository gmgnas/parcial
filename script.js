// Gráfico de comparación de árboles de decisión
var treeComparisonData = [
    {
        x: ['MAE', 'MSE', 'RMSE'],
        y: [0.38743, 0.58997, 0.76810],
        name: 'Árbol Sin Podar',
        type: 'bar',
        marker: {color: 'rgba(255, 99, 132, 0.7)'}
    },
    {
        x: ['MAE', 'MSE', 'RMSE'],
        y: [0.39797, 0.55418, 0.74443],
        name: 'Árbol Podado',
        type: 'bar',
        marker: {color: 'rgba(54, 162, 235, 0.7)'}
    }
];

var treeComparisonLayout = {
    title: 'Comparación de Métricas: Árboles de Decisión',
    xaxis: {title: 'Métricas'},
    yaxis: {title: 'Valor'},
    barmode: 'group'
};

Plotly.newPlot('treeComparisonChart', treeComparisonData, treeComparisonLayout);

// Gráfico de comparación de algoritmos de clasificación
var classificationComparisonData = [
    {
        x: ['Accuracy', 'Precision', 'Recall', 'F1-Score'],
        y: [0.6667, 0.7222, 0.6667, 0.6741],
        name: 'Naïve Bayes',
        type: 'bar',
        marker: {color: 'rgba(255, 159, 64, 0.7)'}
    },
    {
        x: ['Accuracy', 'Precision', 'Recall', 'F1-Score'],
        y: [0.7778, 0.8148, 0.7778, 0.7778],
        name: 'Random Forest',
        type: 'bar',
        marker: {color: 'rgba(75, 192, 192, 0.7)'}
    }
];

var classificationComparisonLayout = {
    title: 'Comparación de Métricas: Algoritmos de Clasificación',
    xaxis: {title: 'Métricas'},
    yaxis: {title: 'Score', range: [0, 1]},
    barmode: 'group'
};

Plotly.newPlot('classificationComparisonChart', classificationComparisonData, classificationComparisonLayout);

// Gráfico de importancia de variables
var featureImportanceData = [
    {
        x: ['Poverty', 'School Dropout'],
        y: [0.6, 0.4],
        type: 'bar',
        marker: {color: ['rgba(153, 102, 255, 0.7)', 'rgba(255, 205, 86, 0.7)']}
    }
];

var featureImportanceLayout = {
    title: 'Importancia de Variables (Random Forest)',
    xaxis: {title: 'Variables Predictoras'},
    yaxis: {title: 'Importancia', range: [0, 1]}
};

Plotly.newPlot('featureImportanceChart', featureImportanceData, featureImportanceLayout);