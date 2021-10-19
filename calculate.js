
function calculate() {
    //volume
    var pressure = document.getElementsByClassName("pressure")[0].value;
    var nozDia = document.getElementsByClassName("nozDia")[0].value;
    var nozQty = document.getElementsByClassName("nozQty")[0].value;
    var pumpOut = document.getElementsByClassName("pumpOut")[0].value;
    var density = document.getElementsByClassName("density")[0].value;
    var factor = document.getElementsByClassName("factor")[0].value;
    var Q
    bernoulli(pressure, nozDia, nozQty, pumpOut, density, factor, Q)
};

function bernoulli(p, D, q, o, d, F, Q) {
    var nozzle_velocity


    for (let i = 0; i < 10000; i++) {

        nozzle_velocity = i/10
        var pressure = p * 100000
        var nozzle_area = 3.1415 * ((D / 1000) / 2) * ((D / 1000) / 2) * q
        var density = d * 1000
        var pump_pressure_head = pressure / (density * 9.81)
        var nozzle_velocity_head = nozzle_velocity * nozzle_velocity / 2 / 9.81
        var flowrate = nozzle_velocity * nozzle_area
        var head_loss = nozzle_velocity_head * F
        var pump_outlet = o * 0.0254
        var outlet_area = 3.1415 * (pump_outlet / 2) *  (pump_outlet / 2) 
        var pump_flow_velocity = flowrate / outlet_area
        var pump_velocity_head = pump_flow_velocity *pump_flow_velocity / 2 / 9.81


        var E = pump_pressure_head + pump_velocity_head - nozzle_velocity_head - head_loss
        console.log(i)
        console.log("p:" + p)
        console.log("D:" + D)
        console.log("q:" + q)
        console.log("o:" + o)
        console.log("d:" + d)

        console.log("pressure:" + pressure)
        console.log("nozzle_area:" + nozzle_area)
        console.log("density:" + density)
        console.log("pump_pressure_head:" + pump_pressure_head)
        console.log("nozzle_velocity_head:" + nozzle_velocity_head)
        console.log("flowrate:" + flowrate)
        console.log("head_loss:" + head_loss)
        console.log("pump_outlet:" + pump_outlet)
        console.log("outlet_area:" + outlet_area)
        console.log("pump_flow_velocity:" + pump_flow_velocity)
        console.log("pump_velocity_head:" + pump_velocity_head)
        console.log("E:" + E)



        if (E < 0) {
            Q = flowrate * 60000
            document.getElementById("flowRate").innerHTML = "Flowrate: " + Q.toFixed() + " L/min"
            return
        }
    }

}






