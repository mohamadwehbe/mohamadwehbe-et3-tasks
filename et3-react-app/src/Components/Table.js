import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Search from './Search';
import et3img from '../et3img.jpg';
import {
  useGridApiRef,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import {
  randomId
} from '@mui/x-data-grid-generator';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const defaultTheme = createTheme();

const useStyles = makeStyles(
  (theme) => ({
    actions: {
      color: theme.palette.text.secondary,
    },
    textPrimary: {
      color: theme.palette.text.primary,
    },
  }),
  { defaultTheme },
);

const rows = [];

function EditToolbar(props) {
  const { apiRef } = props;

  const handleClick = () => {
    const id = randomId();
    apiRef.current.updateRows([{ id, isNew: true }]);
    apiRef.current.setRowMode(id, 'edit');
    // Wait for the grid to render with the new row
    setTimeout(() => {
      apiRef.current.scrollToIndexes({
        rowIndex: apiRef.current.getRowsCount() - 1,
      });

      apiRef.current.setCellFocus(id, 'se');
    });
  };

  return (
    <GridToolbarContainer style={{backgroundColor:'GrayText'}} >
      <Button startIcon={<AddIcon />} onClick={handleClick} style = {{color:'white'}} >
        Add record
      </Button>
      <Search/>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  apiRef: PropTypes.shape({
    current: PropTypes.object.isRequired,
  }).isRequired,
};

export default function FullFeaturedCrudGrid() {
  const classes = useStyles();
  const apiRef = useGridApiRef();

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleCellFocusOut = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, 'edit');
  };

  const handleSaveClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.commitRowChange(id);
    apiRef.current.setRowMode(id, 'view');

    const row = apiRef.current.getRow(id);
    apiRef.current.updateRows([{ ...row, isNew: false }]);
  };

  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.updateRows([{ id, _action: 'delete' }]);
  };

  const handleCancelClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, 'view');

    const row = apiRef.current.getRow(id);
    if (row.isNew) {
      apiRef.current.updateRows([{ id, _action: 'delete' }]);
    }
  };

  const columns = [
    {
      field: 'dateCreated',
      headerName: 'Date Created',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'se',
      headerName: 'SE',
      type: 'singleSelect',
      valueOptions: ['BY', 'AH','HT','MG','MW','AC','JC'],
      width: 180,
      editable: true
    },
    { field: 'id', headerName: '#', type: 'number', editable: true },
    {
      field: 'platform',
      headerName: 'Platform',
      type: 'singleSelect',
      valueOptions: ['mobile-client', 'kh-server-node',
                      'kh-sqs-worker', 'kh-server-firebase',
                      'kh-admin-client', 'kh-admin-server-new',
                      'kh-admin','fa-mobile-clent','fa-server-firebase',
                      'kh-website','fa-website'
                    ],
      width: 180,
      editable: true },
    {
      field: 'release',
      headerName: 'Release version',
      type: 'singleSelect',
      valueOptions: ['1.8.0'],
      width: 180,
      editable: true
    },
    { field: 'comments', headerName: 'Comments', width: 180, editable: true },
    { field: 'link', headerName: 'PR Link', width: 180, editable: true },
    {
      field: 'size',
      headerName: 'Size',
      type: 'singleSelect',
      valueOptions: ['SMALL', 'MEDIUM', 'LARGE'],
      width: 180,
      editable: true
    },
    {
      field: 'dificulty',
      headerName: 'Dificulty',
      type: 'singleSelect',
      valueOptions: ['EASY', 'MEDIUM', 'HARD'],
      width: 180,
      editable: true },
    {
      field: 'status',
      headerName: 'Status',
      type: 'singleSelect',
      valueOptions: ['Merged', 'Need Review',
                     'Closed','Has Comments'
                    ],
      width: 180,
      editable: true
    },
    {
      field: 'by',
      headerName: 'Review By BY',
      type: 'singleSelect',
      valueOptions: ['yes', 'no'],
      width: 180,
      editable: true
    },
    {
      field: 'ht',
      headerName: 'Review By AH',
      type: 'singleSelect',
      valueOptions: ['yes', 'no'],
      width: 180,
      editable: true
    },
    {
      field: 'ht',
      headerName: 'Review By HT',
      type: 'singleSelect',
      valueOptions: ['yes', 'no'],
      width: 180,
      editable: true
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: classes.actions,
      getActions: ({ id }) => {
        const isInEditMode = apiRef.current.getRowMode(id) === 'edit';

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className={classes.textPrimary}
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon style={{color:'white'}}/>}
            label="Edit"
            className={classes.textPrimary}
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<HighlightOffIcon style={{color:'white'}}/>}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <div style={{ height: 500, width: '100%'}}>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',paddingBlock:20}}>
        <img src={et3img} alt="et3img" style={{width:'5%'}}/>
        <div style={{fontSize:30,marginLeft:20}} >et3arraf SAL</div>
      </div>
      <DataGridPro
        rows={rows}
        columns={columns}
        apiRef={apiRef}
        editMode="row"
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        onCellFocusOut={handleCellFocusOut}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { apiRef },
        }}
        style = {{backgroundColor: 'rgba(130, 130, 130, 1)',color:'white',fontSize:20,padding:20}}
      />
    </div>
  );
}
