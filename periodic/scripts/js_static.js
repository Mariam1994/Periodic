var link = 'https://en.wikipedia.org/';
function setInnerHTML() {
	var main = $tag('main'),
	table = $tag('table'),
	figure = $tag('figure'),
	tbody = $tag('tbody'),
	tfoot = $tag('tfoot'),
	monitor = $tag('div').attr('id','display'),
	periodic = $tag('h2').attr('id','periodic').attr('title','Pereodic ^50~6iodic table of e^100lemen~6the elements^2000 by Dmitri Ivanovich and Hapet^1000 :)^3000~33^1000');
    
    monitor.innerHTML = '<h2 id="atomic_number"></h2>\
    						<h2 id="symbol"></h2>\
    						<h2 id="name"></h2>\
    						<h2 id="atomic_mass"></h2>';
	tbody.innerHTML = '<tr> \
	            <th></th> \
	            <th> \
	                <p>1</p> \
	                <p>IA</p> \
	                <p>1A</p> \
				</th> \
				<th colspan="16"></th> \
				<th> \
					<p>18</p> \
	                <p>VIIIA</p> \
	                <p>8A</p> \
				</th> \
			</tr> \
	        <tr> \
			    <th> \
				    <p>1</p> \
			    </th> \
			    <td class="nonmetal" title="hydrogen"> \
				    <a href="' + link + '?title=hydrogen"> \
					    <small>1</small> \
					    <big>H</big> \
					    <bdo>hydrogen</bdo> \
					    <bdi>1.0079</bdi> \
				    </a> \
			    </td> \
			    <th> \
				    <p>2</p> \
	                <p>IIA</p> \
	                <p>2A</p> \
			    </th> \
			    <th colspan="10"></th> \
			    <th> \
				    <p>13</p> \
	                <p>IIIA</p> \
	                <p>3A</p> \
			    </th> \
			    <th> \
				    <p>14</p> \
	                <p>IVA</p> \
	                <p>4A</p> \
			    </th> \
			    <th> \
				    <p>15</p> \
	                <p>VA</p> \
	                <p>5A</p> \
			    </th> \
			    <th> \
				    <p>16</p> \
	                <p>VIA</p> \
	                <p>6A</p> \
			    </th> \
			    <th> \
				    <p>17</p> \
	                <p>VIIA</p> \
	                <p>7A</p> \
			    </th> \
			    <td class="noble_gas" title="helium"> \
				    <a href="' + link + 'wiki/helium"> \
					    <small>2</small> \
					    <big>He</big> \
					    <bdo>helium</bdo> \
					    <bdi>4.00260</bdi> \
				    </a> \
			    </td> \
		    </tr> \
			<tr> \
				<th> \
					<p>2</p> \
				</th> \
				<td class="alkali_metal" title="Lithium"> \
					<a href="' + link + 'wiki/Lithium"> \
						<small>3</small> \
						<big>Li</big> \
						<bdo>Lithium</bdo> \
						<bdi>6.941</bdi> \
					</a> \
				</td> \
				<td class="alkaline_metal" title="Beryllium"> \
					<a href="' + link + 'wiki/Beryllium"> \
						<small>4</small> \
						<big>Be</big> \
						<bdo>Beryllium</bdo> \
						<bdi>9.01218</bdi> \
					</a> \
				</td> \
				<th colspan="10"></th> \
				<td class="semi_metal" title="Boron"> \
					<a href="' + link + 'wiki/Boron"> \
						<small>5</small> \
						<big>B</big> \
						<bdo>Boron</bdo> \
						<bdi>10.811</bdi> \
					</a> \
				</td> \
				<td class="nonmetal" title="Carbon"> \
					<a href="' + link + 'wiki/Carbon"> \
						<small>6</small> \
						<big>C</big> \
						<bdo>Carbon</bdo> \
						<bdi>12.011</bdi> \
					</a> \
				</td> \
				<td class="nonmetal" title="Nitrogen"> \
					<a href="' + link + 'wiki/Nitrogen"> \
						<small>7</small> \
						<big>N</big> \
						<bdo>Nitrogen</bdo> \
						<bdi>14.00674</bdi> \
					</a> \
				</td> \
				<td class="nonmetal" title="Oxygen"> \
					<a href="' + link + 'wiki/Oxygen"> \
						<small>8</small> \
						<big>O</big> \
						<bdo>Oxygen</bdo> \
						<bdi>15.9994</bdi> \
					</a> \
				</td> \
				<td class="halogen" title="Fluorine"> \
					<a href="' + link + 'wiki/Fluorine"> \
						<small>9</small> \
						<big>F</big> \
						<bdo>Fluorine</bdo> \
						<bdi>18.99840</bdi> \
					</a> \
				</td> \
				<td class="noble_gas" title="Neon"> \
					<a href="' + link + 'wiki/Neon"> \
						<small>10</small> \
						<big>Ne</big> \
						<bdo>Neon</bdo> \
						<bdi>20.1797</bdi> \
					</a> \
				</td> \
			</tr> \
			<tr> \
				<th> \
					<p>3</p> \
				</th>\
				<td class="alkali_metal" title="Sodium (Natrium)"> \
					<a href="' + link + 'wiki/Sodium">\
						<small>11</small> \
						<big>Na</big>\
						<bdo>Sodium</bdo> \
						<bdi>22.98977</bdi> \
					</a> \
				</td> \
				<td class="alkaline_metal" title="Magnesium"> \
					<a href="' + link + 'wiki/Magnesium"> \
						<small>12</small> \
						<big>Mg</big> \
						<bdo>Magnesium</bdo> \
						<bdi>24.305</bdi> \
					</a> \
				</td> \
				<th> \
					<p>3</p> \
					<p>IIIB</p> \
					<p>3B</p> \
				</th> \
				<th> \
					<p>4</p> \
					<p>IVB</p> \
					<p>4B</p> \
				</th> \
				<th> \
					<p>5</p> \
					<p>VB</p> \
					<p>5B</p> \
				</th> \
				<th> \
					<p>6</p> \
					<p>VIB</p> \
					<p>6B</p> \
				</th> \
				<th> \
					<p>7</p> \
					<p>VIIB</p> \
					<p>7B</p> \
				</th> \
				<th> \
					<p>8</p> \
					<p>VIII</p> \
					<p>8</p> \
				</th> \
				<th> \
					<p>9</p> \
					<p>VIII</p> \
					<p>8</p> \
				</th> \
				<th> \
					<p>10</p> \
					<p>VIII</p> \
					<p>8</p> \
				</th> \
				<th> \
					<p>11</p> \
					<p>IB</p> \
					<p>1B</p> \
				</th> \
				<th> \
					<p>12</p> \
					<p>IIB</p> \
					<p>2B</p> \
				</th> \
				<td class="basic_metal" title="Aluminum"> \
					<a href="' + link + 'wiki/Aluminum"> \
						<small>13</small> \
						<big>Al</big> \
						<bdo>Aluminum</bdo> \
						<bdi>26.981539</bdi> \
					</a> \
				</td> \
				<td class="semi_metal" title="Silicon"> \
					<a href="' + link + 'wiki/Silicon"> \
						<small>14</small> \
						<big>Si</big> \
						<bdo>Silicon</bdo> \
						<bdi>28.0855</bdi> \
					</a> \
				</td> \
				<td class="nonmetal" title="Phosphorus"> \
					<a href="' + link + 'wiki/Phosphorus"> \
						<small>15</small> \
						<big>P</big> \
						<bdo>Phosphorus</bdo> \
						<bdi>30.97376</bdi> \
					</a> \
				</td> \
				<td class="nonmetal" title="Sulfur"> \
					<a href="' + link + 'wiki/Sulfur"> \
						<small>16</small> \
						<big>S</big> \
						<bdo>Sulfur</bdo> \
						<bdi>32.066</bdi> \
					</a> \
				</td> \
				<td class="halogen" title="Chlorine"> \
					<a href="' + link + 'wiki/Chlorine"> \
						<small>17</small> \
						<big>Cl</big> \
						<bdo>Chlorine</bdo> \
						<bdi>35.4527</bdi> \
					</a> \
				</td> \
				<td class="noble_gas" title="Argon"> \
					<a href="' + link + 'wiki/Argon"> \
						<small>18</small> \
						<big>Ar</big> \
						<bdo>Argon</bdo> \
						<bdi>39.948</bdi> \
					</a> \
				</td> \
			</tr> \
			<tr> \
				<th> \
					<p>4</p> \
				</th> \
				<td class="alkali_metal" title="Potassium (Kalium)"> \
					<a href="' + link + 'wiki/Potassium"> \
						<small>19</small> \
						<big>K</big> \
						<bdo>Potassium</bdo> \
						<bdi>39.0983</bdi> \
					</a> \
				</td> \
				<td class="alkaline_metal" title="Calcium"> \
					<a href="' + link + 'wiki/Calcium"> \
						<small>20</small> \
						<big>Ca</big> \
						<bdo>Calcium</bdo> \
						<bdi>40.078</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Scandium"> \
					<a href="' + link + 'wiki/Scandium"> \
						<small>21</small> \
						<big>Sc</big> \
						<bdo>Scandium</bdo> \
						<bdi>44.95591</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Titanium"> \
					<a href="' + link + 'wiki/Titanium"> \
						<small>22</small> \
						<big>Ti</big> \
						<bdo>Titanium</bdo> \
						<bdi>47.88</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Vanadium"> \
					<a href="' + link + 'wiki/Vanadium"> \
						<small>23</small> \
						<big>V</big> \
						<bdo>Vanadium</bdo> \
						<bdi>50.9415</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Chromium"> \
					<a href="' + link + 'wiki/Chromium"> \
						<small>24</small> \
						<big>Cr</big> \
						<bdo>Chromium</bdo> \
						<bdi>51.9961</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Manganese"> \
					<a href="' + link + 'wiki/Manganese"> \
						<small>25</small> \
						<big>Mn</big> \
						<bdo>Manganese</bdo> \
						<bdi>54.938</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Iron (Ferrum)"> \
					<a href="' + link + 'wiki/Iron"> \
						<small>26</small> \
						<big>Fe</big> \
						<bdo>Iron</bdo> \
						<bdi>55.847</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Cobalt"> \
					<a href="' + link + 'wiki/Cobalt"> \
						<small>27</small> \
						<big>Co</big> \
						<bdo>Cobalt</bdo> \
						<bdi>58.9332</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Nickel"> \
					<a href="' + link + 'wiki/Nickel"> \
						<small>28</small> \
						<big>Ni</big> \
						<bdo>Nickel</bdo> \
						<bdi>58.6934</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Copper"> \
					<a href="' + link + 'wiki/Copper"> \
						<small>29</small> \
						<big>Cu</big> \
						<bdo>Copper</bdo> \
						<bdi>63.546</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Zinc"> \
					<a href="' + link + 'wiki/Zinc"> \
						<small>30</small> \
						<big>Zn</big> \
						<bdo>Zinc</bdo> \
						<bdi>65.39</bdi> \
					</a> \
				</td> \
				<td class="basic_metal" title="Gallium"> \
					<a href="' + link + 'wiki/Gallium"> \
						<small>31</small> \
						<big>Ga</big> \
						<bdo>Gallium</bdo> \
						<bdi>69.732</bdi> \
					</a> \
				</td> \
				<td class="semi_metal" title="Germanium"> \
					<a href="' + link + 'wiki/Germanium"> \
						<small>32</small> \
						<big>Ge</big> \
						<bdo>Germanium</bdo> \
						<bdi>72.64</bdi> \
					</a> \
				</td> \
				<td class="semi_metal" title="Arsenic"> \
					<a href="' + link + 'wiki/Arsenic"> \
						<small>33</small> \
						<big>As</big> \
						<bdo>Arsenic</bdo> \
						<bdi>74.92159</bdi> \
					</a> \
				</td> \
				<td class="nonmetal" title="Selenium"> \
					<a href="' + link + 'wiki/Selenium"> \
						<small>34</small> \
						<big>Se</big> \
						<bdo>Selenium</bdo> \
						<bdi>78.96</bdi> \
					</a> \
				</td> \
				<td class="halogen" title="Bromine"> \
					<a href="' + link + 'wiki/Bromine"> \
						<small>35</small> \
						<big>Br</big> \
						<bdo>Bromine</bdo> \
						<bdi>79.904</bdi> \
					</a> \
				</td> \
				<td class="noble_gas" title="Krypton"> \
					<a href="' + link + 'wiki/Krypton"> \
						<small>36</small> \
						<big>Kr</big> \
						<bdo>Krypton</bdo> \
						<bdi>83.80</bdi> \
					</a> \
				</td> \
			</tr> \
			<tr> \
				<th> \
					<p>5</p> \
				</th> \
				<td class="alkali_metal" title="Rabidium"> \
					<a href="' + link + 'wiki/Rabidium"> \
						<small>37</small> \
						<big>Rb</big> \
						<bdo>Rabidium</bdo> \
						<bdi>85.4678</bdi> \
					</a> \
				</td> \
				<td class="alkaline_metal" title="Strontium"> \
					<a href="' + link + 'wiki/Strontium"> \
						<small>38</small> \
						<big>Sr</big> \
						<bdo>Strontium</bdo> \
						<bdi>87.62</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Yttrium"> \
					<a href="' + link + 'wiki/Yttrium"> \
						<small>39</small> \
						<big>Y</big> \
						<bdo>Yttrium</bdo> \
						<bdi>88.90585</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Zirconium"> \
					<a href="' + link + 'wiki/Zirconium"> \
						<small>40</small> \
						<big>Zr</big> \
						<bdo>Zirconium</bdo> \
						<bdi>91.224</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Niobium"> \
					<a href="' + link + 'wiki/Niobium"> \
						<small>41</small> \
						<big>Nb</big> \
						<bdo>Niobium</bdo> \
						<bdi>92.90638</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Molybdenum"> \
					<a href="' + link + 'wiki/Molybdenum"> \
						<small>42</small> \
						<big>Mo</big> \
						<bdo>Molybdenum</bdo> \
						<bdi>95.94</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Technetium"> \
					<a href="' + link + 'wiki/Technetium"> \
						<small>43</small> \
						<big>Tc</big> \
						<bdo>Technetium</bdo> \
						<bdi>98.9072</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Ruthenium"> \
					<a href="' + link + 'wiki/Ruthenium"> \
						<small>44</small> \
						<big>Ru</big> \
						<bdo>Ruthenium</bdo> \
						<bdi>101.07</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Rhodium"> \
					<a href="' + link + 'wiki/Rhodium"> \
						<small>45</small> \
						<big>Rh</big> \
						<bdo>Rhodium</bdo> \
						<bdi>102.9055</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Palladium"> \
					<a href="' + link + 'wiki/Palladium"> \
						<small>46</small> \
						<big>Pd</big> \
						<bdo>Palladium</bdo> \
						<bdi>106.42</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Silver (Argentum)"> \
					<a href="' + link + 'wiki/Silver"> \
						<small>47</small> \
						<big>Ag</big> \
						<bdo>Silver</bdo> \
						<bdi>107.8682</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Cadmium"> \
					<a href="' + link + 'wiki/Cadmium"> \
						<small>48</small> \
						<big>Cd</big> \
						<bdo>Cadmium</bdo> \
						<bdi>112.411</bdi> \
					</a> \
				</td> \
				<td class="basic_metal" title="Indium"> \
					<a href="' + link + 'wiki/Indium"> \
						<small>49</small> \
						<big>In</big> \
						<bdo>Indium</bdo> \
						<bdi>114.818</bdi> \
					</a> \
				</td> \
				<td class="basic_metal" title="Tin (Stannum)"> \
					<a href="' + link + 'wiki/Tin"> \
						<small>50</small> \
						<big>Sn</big> \
						<bdo>Tin</bdo> \
						<bdi>118.71</bdi> \
					</a> \
				</td> \
				<td class="semi_metal" title="Antimony (Stibium)"> \
					<a href="' + link + 'wiki/Antimony"> \
						<small>51</small> \
						<big>Sb</big> \
						<bdo>Antimony</bdo> \
						<bdi>121.760</bdi> \
					</a> \
				</td> \
				<td class="semi_metal" title="Tellurium"> \
					<a href="' + link + 'wiki/Tellurium"> \
						<small>52</small> \
						<big>Te</big> \
						<bdo>Tellurium</bdo> \
						<bdi>127.6</bdi> \
					</a> \
				</td> \
				<td class="halogen" title="Iodine"> \
					<a href="' + link + 'wiki/Iodine"> \
						<small>53</small> \
						<big>I</big> \
						<bdo>Iodine</bdo> \
						<bdi>126.90447</bdi> \
					</a> \
				</td> \
				<td class="noble_gas" title="Xenon"> \
					<a href="' + link + 'wiki/Xenon"> \
						<small>54</small> \
						<big>Xe</big> \
						<bdo>Xenon</bdo> \
						<bdi>131.29</bdi> \
					</a> \
				</td> \
			</tr> \
			<tr> \
				<th> \
					<p>6</p> \
				</th> \
				<td class="alkali_metal" title="Cesium"> \
					<a href="' + link + 'wiki/Cesium"> \
						<small>55</small> \
						<big>Cs</big> \
						<bdo>Cesium</bdo> \
						<bdi>132.90543</bdi> \
					</a> \
				</td> \
				<td class="alkaline_metal" title="Barium"> \
					<a href="' + link + 'wiki/Barium"> \
						<small>56</small> \
						<big>Ba</big> \
						<bdo>Barium</bdo> \
						<bdi>137.327</bdi> \
					</a> \
				</td> \
				<td class="lanthanide numb" title="Lanthanides"> \
					<p>57-71</p> \
				</td> \
				<td class="transition_metal" title="Hafnium"> \
					<a href="' + link + 'wiki/Hafnium"> \
						<small>72</small> \
						<big>Hf</big> \
						<bdo>Hafnium</bdo> \
						<bdi>178.49</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Tantalum"> \
					<a href="' + link + 'wiki/Tantalum"> \
						<small>73</small> \
						<big>Ta</big> \
						<bdo>Tantalum</bdo> \
						<bdi>180.9479</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Tungsten"> \
					<a href="' + link + 'wiki/Tungsten"> \
						<small>74</small> \
						<big>W</big> \
						<bdo>Tungsten</bdo> \
						<bdi>183.85</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Rhenium"> \
					<a href="' + link + 'wiki/Rhenium"> \
						<small>75</small> \
						<big>Re</big> \
						<bdo>Rhenium</bdo> \
						<bdi>186.207</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Osmium"> \
					<a href="' + link + 'wiki/Osmium"> \
						<small>76</small> \
						<big>Os</big> \
						<bdo>Osmium</bdo> \
						<bdi>190.23</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Iridium"> \
					<a href="' + link + 'wiki/Iridium"> \
						<small>77</small> \
						<big>Ir</big> \
						<bdo>Iridium</bdo> \
						<bdi>192.22</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Platinum"> \
					<a href="' + link + 'wiki/Platinum"> \
						<small>78</small> \
						<big>Pt</big> \
						<bdo>Platinum</bdo> \
						<bdi>195.08</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Gold (Aurum)"> \
					<a href="' + link + 'wiki/Gold"> \
						<small>79</small> \
						<big>Au</big> \
						<bdo>Gold</bdo> \
						<bdi>196.9665</bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Mercury (Hydrargyrum)"> \
					<a href="' + link + 'wiki/Mercury_(element)"> \
						<small>80</small> \
						<big>Hg</big> \
						<bdo>Mercury</bdo> \
						<bdi>200.59</bdi> \
					</a> \
				</td> \
				<td class="basic_metal" title="Thallium"> \
					<a href="' + link + 'wiki/Thallium"> \
						<small>81</small> \
						<big>Tl</big> \
						<bdo>Thallium</bdo> \
						<bdi>204.3833</bdi> \
					</a> \
				</td> \
				<td class="basic_metal" title="Lead (Plumbum)"> \
					<a href="' + link + 'wiki/Lead"> \
						<small>82</small> \
						<big>Pb</big> \
						<bdo>Lead</bdo> \
						<bdi>207.2</bdi> \
					</a> \
				</td> \
				<td class="basic_metal" title="Bismuth"> \
					<a href="' + link + 'wiki/Bismuth"> \
						<small>83</small> \
						<big>Bi</big> \
						<bdo>Bismuth</bdo> \
						<bdi>208.9804</bdi> \
					</a> \
				</td> \
				<td class="semi_metal" title="Polonium"> \
					<a href="' + link + 'wiki/Polonium"> \
						<small>84</small> \
						<big>Po</big> \
						<bdo>Polonium</bdo> \
						<bdi><q>208.9824</q></bdi> \
					</a> \
				</td> \
				<td class="halogen" title="Astatine"> \
					<a href="' + link + 'wiki/Astatine"> \
						<small>85</small> \
						<big>At</big> \
						<bdo>Astatine</bdo> \
						<bdi>209.9871</bdi> \
					</a> \
				</td> \
				<td class="noble_gas" title="Radon"> \
					<a href="' + link + 'wiki/Radon"> \
						<small>86</small> \
						<big>Rn</big> \
						<bdo>Radon</bdo> \
						<bdi>222.0176</bdi> \
					</a> \
				</td> \
			</tr> \
			<tr> \
				<th> \
					<p>7</p> \
				</th> \
				<td class="alkali_metal" title="Francium"> \
					<a href="' + link + 'wiki/Francium"> \
						<small>87</small> \
						<big>Fr</big> \
						<bdo>Francium</bdo> \
						<bdi>223.0197</bdi> \
					</a> \
				</td> \
				<td class="alkaline_metal" title="Radium"> \
					<a href="' + link + 'wiki/Radium"> \
						<small>88</small> \
						<big>Ra</big> \
						<bdo>Radium</bdo> \
						<bdi>226.0254</bdi> \
					</a> \
				</td> \
				<td class="actinide numb" title="Actinides"> \
					<p>89-103</p> \
				</td> \
				<td class="transition_metal" title="Rutherfordium"> \
					<a href="' + link + 'wiki/Rutherfordium"> \
						<small>104</small> \
						<big>Rf</big> \
						<bdo>Rutherfordium</bdo> \
						<bdi><q>261</q></bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Dubnium"> \
					<a href="' + link + 'wiki/Dubnium"> \
						<small>105</small> \
						<big>Db</big> \
						<bdo>Dubnium</bdo> \
						<bdi><q>262</q></bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Seaborgium"> \
					<a href="' + link + 'wiki/Seaborgium"> \
						<small>106</small> \
						<big>Sg</big> \
						<bdo>Seaborgium</bdo> \
						<bdi><q>266</q></bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Bohrium"> \
					<a href="' + link + 'wiki/Bohrium"> \
						<small>107</small> \
						<big>Bh</big> \
						<bdo>Bohrium</bdo> \
						<bdi><q>264</q></bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Hassium"> \
					<a href="' + link + 'wiki/Hassium"> \
						<small>108</small> \
						<big>Hs</big> \
						<bdo>Hassium</bdo> \
						<bdi><q>269</q></bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Meitnerium"> \
					<a href="' + link + 'wiki/Meitnerium"> \
						<small>109</small> \
						<big>Mt</big> \
						<bdo>Meitnerium</bdo> \
						<bdi><q>268</q></bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Darmstadtium"> \
					<a href="' + link + 'wiki/Darmstadtium"> \
						<small>110</small> \
						<big>Ds</big> \
						<bdo>Darmstadtium</bdo> \
						<bdi><q>269</q></bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Roentgenium"> \
					<a href="' + link + 'wiki/Roentgenium"> \
						<small>111</small> \
						<big>Rg</big> \
						<bdo>Roentgenium</bdo> \
						<bdi><q>272</q></bdi> \
					</a> \
				</td> \
				<td class="transition_metal" title="Copernicium"> \
					<a href="' + link + 'wiki/Copernicium"> \
						<small>112</small> \
						<big>Cn</big> \
						<bdo>Copernicium</bdo> \
						<bdi><q>277</q></bdi> \
					</a> \
				</td> \
				<td class="basic_metal" title="Ununtrium"> \
					<a href="' + link + 'wiki/Ununtrium"> \
						<small>113</small> \
						<big>Uut</big> \
						<bdo>Ununtrium</bdo> \
						<bdi><q>286</q></bdi> \
					</a> \
				</td> \
				<td class="basic_metal" title="Ununquadium"> \
					<a href="' + link + 'wiki/Ununquadium"> \
						<small>114</small> \
						<big>Uuq</big> \
						<bdo>Ununquadium</bdo> \
						<bdi><q>289</q></bdi> \
					</a> \
				</td> \
				<td class="basic_metal" title="Ununpentium"> \
					<a href="' + link + 'wiki/Ununpentium"> \
						<small>115</small> \
						<big>Uup</big> \
						<bdo>Ununpentium</bdo> \
						<bdi><q>289</q></bdi> \
					</a> \
				</td> \
				<td class="basic_metal" title="Ununhexium"> \
					<a href="' + link + 'wiki/Ununhexium"> \
						<small>116</small> \
						<big>Uuh</big> \
						<bdo>Ununhexium</bdo> \
						<bdi><q>298</q></bdi> \
					</a> \
				</td> \
				<td class="halogen" title="Ununseptium"> \
					<a href="' + link + 'wiki/Ununseptium"> \
						<small>117</small> \
						<big>Uus</big> \
						<bdo>Ununseptium</bdo> \
						<bdi><q>294</q></bdi> \
					</a> \
				</td> \
				<td class="noble_gas" title="Ununoctium"> \
					<a href="' + link + 'wiki/Ununoctium"> \
						<small>118</small> \
						<big>Uuo</big> \
						<bdo>Ununoctium</bdo> \
						<bdi><q>294</q></bdi> \
					</a> \
				</td> \
			</tr> \
			<tr> \
				<td colspan="19" class="td1"> \
					<table class="child"> \
						<tbody> \
							<tr> \
								<th colspan="3" class="th1" title="Lanthanides"><p class="p1">Lanthanide Series</p></th> \
								<td class="lanthanide" title="Lanthanum"> \
									<a href="' + link + 'wiki/Lanthanum"> \
										<small>57</small> \
										<big>La</big> \
										<bdo>Lanthanum</bdo> \
										<bdi>138.9055</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Cerium"> \
									<a href="' + link + 'wiki/Cerium"> \
										<small>58</small> \
										<big>Ce</big> \
										<bdo>Cerium</bdo> \
										<bdi>140.115</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Praseodymium"> \
									<a href="' + link + 'wiki/Praseodymium"> \
										<small>59</small> \
										<big>Pr</big> \
										<bdo>Praseodymium</bdo> \
										<bdi>140.9077</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Neodymium"> \
									<a href="' + link + 'wiki/Neodymium"> \
										<small>60</small> \
										<big>Nd</big> \
										<bdo>Neodymium</bdo> \
										<bdi>144.24</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Promethium"> \
									<a href="' + link + 'wiki/Promethium"> \
										<small>61</small> \
										<big>Pm</big> \
										<bdo>Promethium</bdo> \
										<bdi>144.9127</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Samarium"> \
									<a href="' + link + 'wiki/Samarium"> \
										<small>62</small> \
										<big>Sm</big> \
										<bdo>Samarium</bdo> \
										<bdi>150.36</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Europium"> \
									<a href="' + link + 'wiki/Europium"> \
										<small>63</small> \
										<big>Eu</big> \
										<bdo>Europium</bdo> \
										<bdi>151.9655</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Gadolinium"> \
									<a href="' + link + 'wiki/Gadolinium"> \
										<small>64</small> \
										<big>Gd</big> \
										<bdo>Gadolinium</bdo> \
										<bdi>157.25</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Terbium"> \
									<a href="' + link + 'wiki/Terbium"> \
										<small>65</small> \
										<big>Tb</big> \
										<bdo>Terbium</bdo> \
										<bdi>158.92534</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Dysprosium"> \
									<a href="' + link + 'wiki/Dysprosium"> \
										<small>66</small> \
										<big>Dy</big> \
										<bdo>Dysprosium</bdo> \
										<bdi>162.50</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Holmium"> \
									<a href="' + link + 'wiki/Holmium"> \
										<small>67</small> \
										<big>Ho</big> \
										<bdo>Holmium</bdo> \
										<bdi>164.93032</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Erbium"> \
									<a href="' + link + 'wiki/Erbium"> \
										<small>68</small> \
										<big>Er</big> \
										<bdo>Erbium</bdo> \
										<bdi>167.26</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Thulium"> \
									<a href="' + link + 'wiki/Thulium"> \
										<small>69</small> \
										<big>Tm</big> \
										<bdo>Thulium</bdo> \
										<bdi>168.93421</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Ytterbium"> \
									<a href="' + link + 'wiki/Ytterbium"> \
										<small>70</small> \
										<big>Yb</big> \
										<bdo>Ytterbium</bdo> \
										<bdi>173.04</bdi> \
									</a> \
								</td> \
								<td class="lanthanide" title="Lutetium"> \
									<a href="' + link + 'wiki/Lutetium"> \
										<small>71</small> \
										<big>Lu</big> \
										<bdo>Lutetium</bdo> \
										<bdi>174.967</bdi> \
									</a> \
								</td> \
							</tr> \
			                <tr> \
				                <th colspan="3" class="th1" title="Actinides"><p class="p1">Actinide Series</p></th> \
				                <td class="actinide"> \
					                <a href="' + link + 'wiki/Actinium"> \
						                <small>89</small> \
						                <big>Ac</big> \
						                <bdo>Actinium</bdo> \
						                <bdi>227.0278</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Thorium"> \
					                <a href="' + link + 'wiki/Thorium"> \
						                <small>90</small> \
						                <big>Th</big> \
						                <bdo>Thorium</bdo> \
						                <bdi>232.0381</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Protactinium"> \
					                <a href="' + link + 'wiki/Protactinium"> \
						                <small>91</small> \
						                <big>Pa</big> \
						                <bdo>Protactinium</bdo> \
						                <bdi>231.03588</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Uranium"> \
					                <a href="' + link + 'wiki/Uranium"> \
						                <small>92</small> \
						                <big>U</big> \
						                <bdo>Uranium</bdo> \
						                <bdi>238.0289</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Neptunium"> \
					                <a href="' + link + 'wiki/Neptunium"> \
						                <small>93</small> \
						                <big>Np</big> \
						                <bdo>Neptunium</bdo> \
						                <bdi>237.0482</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Plutonium"> \
					                <a href="' + link + 'wiki/Plutonium"> \
						                <small>94</small> \
						                <big>Pl</big> \
						                <bdo>Plutonium</bdo> \
						                <bdi>244.0642</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Americium"> \
					                <a href="' + link + 'wiki/Americium"> \
						                <small>95</small> \
						                <big>Am</big> \
						                <bdo>Americium</bdo> \
						                <bdi>243.0614</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Curium"> \
					                <a href="' + link + 'wiki/Curium"> \
						                <small>96</small> \
						                <big>Cm</big> \
						                <bdo>Curium</bdo> \
						                <bdi>247.0703</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Berkelium"> \
					                <a href="' + link + 'wiki/Berkelium"> \
						                <small>97</small> \
						                <big>Bk</big> \
						                <bdo>Berkelium</bdo> \
						                <bdi>247.0703</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Californium"> \
					                <a href="' + link + 'wiki/Californium"> \
						                <small>98</small> \
						                <big>Cf</big> \
						                <bdo>Californium</bdo> \
						                <bdi>251.0796</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Einsteinium"> \
					                <a href="' + link + 'wiki/Einsteinium"> \
						                <small>99</small> \
						                <big>Es</big> \
						                <bdo>Einsteinium</bdo> \
						                <bdi><q>254</q></bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Fermium"> \
					                <a href="' + link + 'wiki/Fermium"> \
						                <small>100</small> \
						                <big>Fm</big> \
						                <bdo>Fermium</bdo> \
						                <bdi>257.0951</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Mendelevium"> \
					                <a href="' + link + 'wiki/Mendelevium"> \
						                <small>101</small> \
						                <big>Md</big> \
						                <bdo>Mendelevium</bdo> \
						                <bdi>258.1</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Nobelium"> \
					                <a href="' + link + 'wiki/Nobelium"> \
						                <small>102</small> \
						                <big>No</big> \
						                <bdo>Nobelium</bdo> \
						                <bdi>259.1009</bdi> \
					                </a> \
				                </td> \
				                <td class="actinide" title="Lawrencium"> \
					                <a href="' + link + 'wiki/Lawrencium"> \
						                <small>103</small> \
						                <big>Lr</big> \
						                <bdo>Lawrencium</bdo> \
						                <bdi><q>262</q></bdi> \
					                </a> \
				                </td> \
			                </tr> \
						</tbody> \
					</table> \
				</td> \
			</tr>';
	    tfoot.innerHTML = '<tr> \
				<td colspan="19"> \
					<a class="actinide" title="actinides" href="' + link + 'wiki/Actinide">Actinides</a> \
					<a class="alkali_metal" title="alkali metals" href="' + link + 'wiki/Alkali_metal">Alkali metals</a> \
					<a class="alkaline_metal" title="alkaline metals" href="' + link + 'wiki/Alkaline_earth_metal">Alkaline metals</a> \
					<a class="halogen" title="halogens" href="' + link + 'wiki/Halogen">Halogens</a> \
					<a class="lanthanide" title="lanthanides" href="' + link + 'wiki/Lanthanide">Lanthanides</a> \
				</td> \
			</tr> \
			<tr> \
				<td colspan="19"> \
					<a class="semi_metal" title="semi metals" href="' + link + 'wiki/Semimetal">Semi metals</a> \
					<a class="noble_gas" title="noble gases" href="' + link + 'wiki/Noble_gas">Noble gases</a> \
					<a class="nonmetal" title="nonmetals" href="' + link + 'wiki/Nonmetal">Nonmetals</a> \
					<a class="basic_metal" title="basic metals" href="' + link + 'wiki/Post-transition_metal">Basic metals</a> \
					<a class="transition_metal" title="transition metals" href="' + link + 'wiki/Transition_metal">Transition metals</a> \
				</td> \
			</tr>';
	monitor.appendAra(periodic);
	figure.appendAra(monitor);
	table.appendAra(tbody).appendAra(tfoot);
	table.attr("class", "parent");
	main.attr("title", "JS Table");
    main.appendAra(figure).appendAra(table);
	document.body.appendAra(main);




		// TYPE -!-!-!-!-!-!--!!--!-!-!-!-!-!--!-!!-!--!-!-!
	var speed = 80,
		timeout,
		current,
		outSide = true,
		welcome = true,
		number = document.getElementById('atomic_number'),
		symbol = document.getElementById('symbol'),
		name = document.getElementById('name'),
		mass = document.getElementById('atomic_mass');

	for(var i=0;i<118;i++){
	    var el = document.getElementsByTagName("a")[i];
	    el.addEventListener("mouseenter", hover);
	    el.addEventListener("mouseleave", out);
	}
	setTimeout(function(){
		displayWelcome();
	},500);

	function hover(){
		clearTimeout(timeout);
		if(welcome)
		{
			periodic.innerHTML = '';
			periodic.parentNode.removeChild(periodic);
			welcome = false;
		}
		current = event.currentTarget;
			number.style.display = 'none';
			symbol.style.display = 'none';
			name.style.display = 'none';
			mass.style.display = 'none';
			outSide = false;
		setTimeout(function(){	
			if(outSide)
				return;
			number.innerText = current.children[0].innerText;
			symbol.innerText = current.children[1].innerText;
			name.innerText = current.children[2].innerText;
			mass.innerText = current.children[3].innerText;
			numLen = number.innerText.length;
			symLen = symbol.innerText.length;
			nameLen = name.innerText.length;

			display(number);
			
			setTimeout(function(){
				number.removeChild(number.children[2]);
				if(!outSide)
					display(symbol);
				else{
					return;
				}

				setTimeout(function(){
					symbol.removeChild(symbol.children[2]);
					if(!outSide)
						display(name);
					else{
						return;
					}
					setTimeout(function(){
						name.removeChild(name.children[2]);
						if(!outSide)
							display(mass);

					}, nameLen*speed);
				}, symLen*speed+50);
			}, numLen*speed+50);
		},300);
	}

	function out(){
		outSide = true;

			number.style.display = 'none';
			symbol.style.display = 'none';
			name.style.display = 'none';
			mass.style.display = 'none';

		clearTimeout(timeout);
		timeout = setTimeout(function(){
			monitor.appendAra(periodic);
			periodic.attr('title','Pereodic ^50~6iodic table of e^100lemen~6the elements^2000 by Dmitri Ivanovich and Hapet^1000 :)^3000~33^1000');
			displayWelcome();
			welcome = true;
		},1000);
	}


	function display(element){
		element.style.display = 'block';
		$( function() {
	        $( element ).each( function() {
              var items =  $( this ).text();
              $( this ).teletype( {
                text: $.map( items.split( ';' ), $.trim ),
                typeDelay: speed,
                cursor: '▋',
                prefix: this.id + ':> ',
              } );
	        } );
	    } );
	}
	

	//Periodic
	function displayWelcome(){
		$( function() {
	      $( periodic ).each( function() {
	        var items = $( this ).attr( 'title' ) + ';' + $( this ).text();
	        $( this ).empty().attr( 'title', '' ).teletypeP( {
	          text: $.map( items.split( ';' ), $.trim ),
	          typeDelay: 25,
	          backDelay: 10,
	          cursor: '▋',
	          delay: 2000,
	          preserve: false,
	          prefix: '[root ~]# ',
	          loop: 0
	        } );
	      } );
	    } );
	}
}
