import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, I18nManager } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

const LAYOUT_SPACING = 20

const BottomSheet = ({ children, visible, onClose }) => {
  const modalizeRef = useRef(null);

  useEffect(() => {
    if (visible) {
      modalizeRef.current?.open();
    } else {
      modalizeRef.current?.close();
    }
  }, [visible]);

  return (
    <Portal>
      <Modalize
        ref={modalizeRef}
        modalTopOffset={30}
        onClose={onClose}
        adjustToContentHeight
        modalStyle={styles.modal}
        disableScrollIfPossible={false}
        scrollViewProps={{
          style: styles.modalContent,
          showsVerticalScrollIndicator: false,
        }}>
        <View
          style={{
            //    marginLeft: LAYOUT_SPACING
          }}>
          {children}
        </View>
      </Modalize>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modal: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalContent: {
    marginTop: 50,
    paddingHorizontal: LAYOUT_SPACING,
    paddingBottom: 20,
  },
});

export default BottomSheet