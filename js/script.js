// Created by: Jaejun Lee
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of a Pyramid.
 */
function calculate () {
  // input
  const length = parseFloat(document.getElementById('length-of-pyramid').value)
  const width = parseFloat(document.getElementById('width-of-pyramid').value)
  const height = parseFloat(document.getElementById('height-of-pyramid').value)

  // process
  const volume = (length * width * height) / 3


  // output
  document.getElementById('volume').innerHTML = 'The volume is: ' + volume.toFixed(2) + ' cm³'
}