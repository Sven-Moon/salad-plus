import { createAction, props } from '@ngrx/store';
import { Ingredients } from 'src/app/modules/order/models/Ingredient';
import { ItemGroup } from 'src/app/modules/order/models/ItemGroup';
import { OrderItem } from '../../models/Item';


export const setItemGroup = createAction(
  '[Specialty] Set Item Group',
  props<{ currentItemGroup: ItemGroup }>()
);

export const updateSpecialtyId = createAction(
  '[Specialty] Update Selected Specialty ID',
  props<{ selectedSpecialtyId: string }>()
)

export const loadItemToBuilder = createAction(
  '[Builder Popup] Commit Temp List Changes to Item',
  props<{ orderItem: OrderItem }>()
)

export const clearCurrentItem = createAction(
  '[Builder Confirm Popup] Clear Current Item'
);


export const updateIngredients = createAction(
  '[Builder Form] Update ingredients on the current item',
  props<{ ingredients: Ingredients }>()
);
