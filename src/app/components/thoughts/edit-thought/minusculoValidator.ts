import { AbstractControl } from "@angular/forms";

export function minusculoValidator(control: AbstractControl) {
  const author = control.value as string;
  if(author !== author?.toLowerCase()){
    return { minusculo: true };
  } else return null;
}
