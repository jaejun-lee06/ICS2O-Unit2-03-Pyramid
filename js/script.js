// Created by: Jaejun Lee
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of a Pyramid.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length-of-pyramid').value)
  const width = parseInt(document.getElementById('width-of-pyramid').value)
  const heigt = parseInt(document.getElementById('height-of-pyramid').value)

  // process
  const volume = (length * width * height) / 3


  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' cm³'
}