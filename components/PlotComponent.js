import Plotly from 'plotly';

const template = `
<div>
    <div id="plot"></div>
</div>
`;

export default {
    name: "plot-component",
    props: ['traces'],
    template,
    mounted() {
        console.log('mounted', this.traces);
        Plotly.react('plot', this.traces);
    },
    watch: {
        traces() {
            Plotly.react('plot', this.traces);
        }
    }
};