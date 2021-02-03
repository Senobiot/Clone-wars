import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { chooseCategories } from '../../../store/actions/actionCategories';
import { chooseCategoriesTile } from '../../../store/actions/actionCategories';
import { updateService } from '../../../store/actions/actionService';
import { centers, services, detailedServ, catsInd } from '../../data/searchKeys';
import { medicsList } from '../../data/medicsList';

import styles from './SearchBar.module.scss';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expanded: {
      '&$expanded': {
        margin: '4px 0',
      },
    },
  }),
);

export const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const centersNames = [...centers];
  const medics = [...medicsList];
  const categories = Object.getOwnPropertyNames(services);
  const categoriesDetailed = Object.getOwnPropertyNames(detailedServ);

  const searchResultTitles = [];
  const searchResultContent = [];
  const [title, setValue] = useState([]);
  const [content, setContent] = useState([]);
  const [input, setInput] = useState('');

  const handler = (e) => {
    if (e.target.value.trim() !== '') {
      setInput(e.target.value);
      const regex = new RegExp(`${e.target.value}`, 'gmi');
      const centersNamesFiltered = centersNames.filter((e) => regex.test(e));
      const categoriesFiltered = categories.filter((e) => regex.test(e));
      const categoriesDetailedFiltered = categoriesDetailed.filter((e) => regex.test(e));

      const medicsNamesFiltered = [];
      const medicsSpecsFiltered = [];

      medics.forEach((element) => {
        if (regex.test(element.name)) {
          medicsNamesFiltered.push(element.name);
        }
        if (regex.test(element.speciality) && medicsSpecsFiltered.indexOf(element.speciality) === -1) {
          medicsSpecsFiltered.push(element.speciality);
        }
      });

      searchResultTitles.push(`В медцентрах ${centersNamesFiltered.length} результатов`);
      searchResultContent.push(centersNamesFiltered);
      searchResultTitles.push(`В направлениях ${categoriesFiltered.length} результатов`);
      searchResultContent.push(categoriesFiltered);
      searchResultTitles.push(`В услугах ${categoriesDetailedFiltered.length} результатов`);
      searchResultContent.push(categoriesDetailedFiltered);
      searchResultTitles.push(`В специальностях ${medicsSpecsFiltered.length} результатов`);
      searchResultContent.push(medicsSpecsFiltered);
      searchResultTitles.push(`В именах ${medicsNamesFiltered.length} результатов`);
      searchResultContent.push(medicsNamesFiltered);

      setValue(searchResultTitles);
      setContent(searchResultContent);
    } else {
      setInput('');
      setValue([]);
      setContent([]);
    }
  };

  const clearInput = () => {
    setInput('');
    setValue([]);
    setContent([]);
  };

  const handlerMedcenters = (e) => {
    clearInput();
    dispatch(updateService({ centers: [e.target.textContent], query: e.target.textContent }));
    history.push({
      pathname: `/MedcentersList`,
    });
  };

  const handlerDepartments = (e) => {
    clearInput();
    dispatch(updateService({ centers: services[e.target.textContent], query: e.target.textContent }));
    history.push({
      pathname: `/MedcentersList`,
    });
  };
  const handlerServices = (e) => {
    clearInput();
    dispatch(updateService({ centers: detailedServ[e.target.textContent], query: e.target.textContent }));
    history.push({
      pathname: `/MedcentersList`,
    });
  };
  const handlerSpecialities = (e) => {
    clearInput();
    dispatch(chooseCategories(e.target.textContent));
    dispatch(chooseCategoriesTile(catsInd.indexOf(e.target.textContent) + 1));
    history.push({
      pathname: '/MedicsList',
    });
  };

  const handlerMedicNames = (e) => {
    clearInput();
    const id = medicsList.find((el) => el.name === e.target.textContent).id;
    history.push({
      pathname: `/MedicPage/${id}`,
    });
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.input}
        value={input}
        type="search"
        placeholder="Найти услугу, врача, медцентр..."
        onChange={handler}
      ></input>
      <div className={content.length ? styles.resultsWrapper : styles.hidden}>
        {title.map((accordeons, index) => {
          return (
            <Accordion classes={{ expanded: classes.expanded }} key={index}>
              <AccordionSummary
                className={styles.summary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a"
                id="r"
              >
                <Typography className={styles.headerTitle}>{accordeons} </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.resultElement1}>
                {content[index].map((e, ids) => (
                  <div
                    key={ids + 50}
                    onClick={
                      index === 0
                        ? handlerMedcenters
                        : index === 1
                        ? handlerDepartments
                        : index === 2
                        ? handlerServices
                        : index === 3
                        ? handlerSpecialities
                        : handlerMedicNames
                    }
                    className={styles.resultElement}
                  >
                    {e}
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};
