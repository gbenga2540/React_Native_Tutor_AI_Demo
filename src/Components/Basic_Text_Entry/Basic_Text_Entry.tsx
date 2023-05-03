import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';
import {
    InputModeOptions,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
} from 'react-native';
import { fonts } from '../../Fonts/Fonts';
import Colors from '../../Colors/Colors';

interface BasicTextEntryProps {
    inputValue: string;
    placeHolderText?: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    marginTop?: string | number;
    marginBottom?: string | number;
    inputMode?: InputModeOptions;
    onFocus?: () => void;
}

const BasicTextEntry: FunctionComponent<BasicTextEntryProps> = ({
    inputValue,
    placeHolderText,
    setInputValue,
    marginTop,
    marginBottom,
    inputMode,
    onFocus,
}) => {
    return (
        <KeyboardAvoidingView
            style={[
                styles.s_t_e_main,
                {
                    marginTop: marginTop || 0,
                    marginBottom: marginBottom || 0,
                },
            ]}>
            <TextInput
                style={styles.s_t_e_m_ti}
                placeholder={placeHolderText || ''}
                placeholderTextColor={Colors().Grey}
                onChangeText={(text: string) => setInputValue(text)}
                value={inputValue}
                autoCapitalize={'none'}
                autoCorrect={false}
                inputMode={inputMode || 'text'}
                onFocus={() => onFocus !== undefined && (onFocus() as unknown)}
            />
        </KeyboardAvoidingView>
    );
};

export default BasicTextEntry;

const styles = StyleSheet.create({
    s_t_e_main: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 56,
        borderRadius: 8,
        borderColor: Colors().Border,
        borderWidth: 1,
        marginHorizontal: 22,
        backgroundColor: Colors().InputBackground,
    },
    s_t_e_m_ti: {
        flex: 1,
        fontFamily: fonts.Urbanist_500,
        fontSize: 16,
        height: 56,
        marginHorizontal: 18,
        textAlignVertical: 'center',
        color: Colors().Dark,
    },
});
