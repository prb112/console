import * as React from 'react';
import { FormSection, TextInputTypes } from '@patternfly/react-core';
import { useTranslation } from 'react-i18next';
import { InputField } from '@console/shared';

const AdminNamespaceSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormSection>
      <InputField
        type={TextInputTypes.text}
        name="namespace"
        label={t('console-app~Project')}
        helpText={t(
          'console-app~This Project will be used to initialize your command line terminal',
        )}
        isDisabled
        required
      />
    </FormSection>
  );
};

export default AdminNamespaceSection;
