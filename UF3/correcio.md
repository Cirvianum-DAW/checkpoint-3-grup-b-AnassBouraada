## Avaluació del Codi

### Validació del Formulari (4p)

#### Requisits Generals

- **Validacions només amb JS** (0,5p)

  - **Complert**: El codi implementa totes les validacions a través de JavaScript.

- **Ús de tres esdeveniments diferents** (0,5p)
  - **Complert**: Es fan servir `blur`, `change` i `input`. Aquests esdeveniments estan ben utilitzats per a les validacions específiques.

#### Validacions - 1a Part (1p)

- **Nom i cognom**: Han de tenir entre 3 i 50 caràcters i no poden contenir números.
  - **Complert parcialment**: El codi valida la longitud del nom i el cognom, però falta la validació per assegurar que no continguin números. No es fa servir el regex indicat per detectar números.
- **Correu electrònic**: Ha de tenir un `@` i un `.`.
  - **Complert parcialment**: El codi valida l'email, però utilitza un `alert` en lloc de `displayError` per mostrar els errors.

#### Validacions - 2a Part (1p)

- **Gènere**: Ha de ser una de les opcions del formulari.

  - **Complert**: El codi valida que el gènere sigui seleccionat i utilitza `displayError` per mostrar l'error.

- **Edat**: L'usuari ha de ser major d'edat.

  - **Complert parcialment**: El codi valida l'edat i mostra un `alert` si l'usuari no és major d'edat. Falta assegurar-se que també es valida que l'entrada és un número.

- **Missatge**: Ha de tenir entre 10 i 200 caràcters.
  - **Complert**: El codi valida correctament la longitud del missatge i utilitza `displayError` per mostrar l'error.

#### Validacions - 3a Part (1p)

- **Producte**: Ha de ser una de les opcions disponibles.

  - **No implementat**: Encara que el codi carrega correctament els productes al `select`, falta una validació explícita en el moment de l'enviament del formulari per assegurar que el producte seleccionat és una de les opcions disponibles.

- **Quantitat**: Ha de ser un nombre enter entre 1 i 10.
  - **No implementat**: Falta la validació de la quantitat i la mostra d'un `alert` en cas d'error.

### Afegir Productes al Formulari (5p)

1. **Carregar els productes disponibles al formulari (2p)**

   - **Complert**: El codi carrega correctament els productes disponibles com a opcions en el `select` de productes.

2. **Preu per defecte i canvi dinàmic (2p)**

   - **Complert parcialment**: La funció `changePrice` actualitza correctament el camp `price` en funció del producte seleccionat. La funció `changeQuantity` inicialitza la quantitat a 1, però podria estar integrada a la mateixa funció per simplificar.

3. **Afegir productes a la llista (1p)**
   - **No implementat**: Falta afegir codi per mostrar els productes seleccionats, quantitat i preu total en una llista sota el formulari.

### Conclusions

**Fet bé:**

- Les validacions de nom, cognom, correu electrònic, edat i missatge estan ben implementades i utilitzen els esdeveniments correctament.
- L'ús de `displayError` i `removeExistingError` per mostrar i gestionar els errors és adequat.
- La càrrega dinàmica dels productes al formulari funciona correctament.
- La funció per canviar el preu del producte seleccionat està ben implementada.

**Millores necessàries:**

- Completar la validació del producte seleccionat i la quantitat.
- Implementar una validació per assegurar que el nom i el cognom no contenen números.
- Canviar l'ús de `alert` per `displayError` per mantenir la consistència en la visualització dels errors.
- Implementar la funcionalitat per afegir els productes seleccionats a una llista sota el formulari, mostrant el nom del producte, la quantitat i el preu total.
- Afegeix una funció per validar tots els camps en fer `submit` al formulari.
