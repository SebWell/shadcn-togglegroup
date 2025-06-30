export default {
  editor: {
    label: {
      en: 'Toggle Group',
      fr: 'Groupe de Boutons Toggle'
    },
    icon: 'toggle'
  },
  triggerEvents: [
    {
      name: 'change',
      label: { en: 'On change', fr: 'Au changement' },
      event: {
        value: '',
        item: {}
      }
    },
    {
      name: 'update:modelValue',
      label: { en: 'On value update', fr: 'Mise à jour de la valeur' },
      event: {
        value: ''
      }
    }
  ],
  properties: {
    variant: {
      label: { en: 'Variant', fr: 'Variante' },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
          { value: 'outline', label: { en: 'Outline', fr: 'Contour' } }
        ]
      },
      defaultValue: 'default',
      bindable: true
    },
    size: {
      label: { en: 'Size', fr: 'Taille' },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'sm', label: { en: 'Small', fr: 'Petit' } },
          { value: 'default', label: { en: 'Default', fr: 'Normal' } },
          { value: 'lg', label: { en: 'Large', fr: 'Grand' } }
        ]
      },
      defaultValue: 'default',
      bindable: true
    },
    multiple: {
      label: { en: 'Multiple selection', fr: 'Sélection multiple' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true
    },
    items: {
      label: { en: 'Items', fr: 'Éléments' },
      type: 'Array',
      options: {
        item: {
          type: 'Object',
          options: {
            item: {
              value: {
                label: { en: 'Value', fr: 'Valeur' },
                type: 'Text',
                bindable: true
              },
              label: {
                label: { en: 'Label', fr: 'Libellé' },
                type: 'Text',
                bindable: true
              },
              icon: {
                label: { en: 'Icon', fr: 'Icône' },
                type: 'Icon',
                bindable: true
              },
              disabled: {
                label: { en: 'Disabled', fr: 'Désactivé' },
                type: 'OnOff',
                defaultValue: false,
                bindable: true
              },
              tooltip: {
                label: { en: 'Tooltip', fr: 'Info-bulle' },
                type: 'Text',
                bindable: true
              }
            }
          }
        }
      },
      defaultValue: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
      ],
      bindable: true
    },
    defaultValue: {
      label: { en: 'Default value', fr: 'Valeur par défaut' },
      type: 'Text',
      bindable: true
    },
    value: {
      label: { en: 'Value', fr: 'Valeur' },
      type: 'Text',
      bindable: true
    },
    label: {
      label: { en: 'Accessibility label', fr: 'Label d\'accessibilité' },
      type: 'Text',
      bindable: true
    },
    customClass: {
      label: { en: 'Custom CSS class', fr: 'Classe CSS personnalisée' },
      type: 'Text',
      bindable: true
    },
    customStyle: {
      label: { en: 'Custom style', fr: 'Style personnalisé' },
      type: 'Text',
      bindable: true
    }
  }
} 